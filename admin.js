function formatAdminCount(count) {
    return Number(count || 0).toLocaleString('zh-CN');
}

function formatAdminTime(isoString) {
    if (!isoString) return '-';
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return isoString;
    return date.toLocaleString('zh-CN', {
        hour12: false,
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

async function readAdminOverview() {
    const res = await fetch('/api/admin/overview', { credentials: 'same-origin' });
    if (!res.ok) throw new Error(`Admin overview request failed: ${res.status}`);
    return res.json();
}

function setMetric(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = formatAdminCount(value);
}

function renderTrend(trend) {
    const root = document.getElementById('adminTrend');
    if (!root) return;
    if (!Array.isArray(trend) || !trend.length) {
        root.innerHTML = '<div class="distribution-empty">最近 14 天还没有新增记录。</div>';
        return;
    }

    const maxValue = Math.max(...trend.map((item) => Number(item.count || 0)), 1);
    root.innerHTML = trend.map((item) => {
        const value = Number(item.count || 0);
        const height = Math.max((value / maxValue) * 100, value > 0 ? 8 : 3);
        return `
            <div class="admin-trend-item">
                <div class="admin-trend-value">${formatAdminCount(value)}</div>
                <div class="admin-trend-bar-track">
                    <div class="admin-trend-bar-fill" style="height:${height}%"></div>
                </div>
                <div class="admin-trend-date">${item.date.slice(5)}</div>
            </div>
        `;
    }).join('');
}

function renderLatest(list) {
    const root = document.getElementById('adminLatestCompletions');
    if (!root) return;
    if (!Array.isArray(list) || !list.length) {
        root.innerHTML = '<div class="distribution-empty">暂无最新完成记录。</div>';
        return;
    }

    root.innerHTML = list.map((item, index) => `
        <article class="admin-latest-item">
            <div class="admin-latest-rank">#${index + 1}</div>
            <img class="admin-latest-image" src="${item.imagePath || ''}" alt="${item.typeCode} ${item.typeName}" loading="lazy" />
            <div class="admin-latest-content">
                <div class="admin-latest-title">${item.typeCode} · ${item.typeName}</div>
                <div class="admin-latest-time">${formatAdminTime(item.createdAt)}</div>
            </div>
        </article>
    `).join('');
}

function renderTypes(list) {
    const root = document.getElementById('adminTypeBreakdown');
    if (!root) return;
    if (!Array.isArray(list) || !list.length) {
        root.innerHTML = '<div class="distribution-empty">暂无人格新增数据。</div>';
        return;
    }

    const maxToday = Math.max(...list.map((item) => Number(item.todayCount || 0)), 1);
    root.innerHTML = list.map((item) => {
        const today = Number(item.todayCount || 0);
        const last7 = Number(item.last7DaysCount || 0);
        const total = Number(item.count || 0);
        const width = Math.max((today / maxToday) * 100, today > 0 ? 6 : 0);
        return `
            <article class="admin-type-item">
                <img class="admin-type-image" src="${item.imagePath || ''}" alt="${item.code} ${item.name}" loading="lazy" />
                <div class="admin-type-content">
                    <div class="admin-type-row">
                        <div class="admin-type-title">${item.code} · ${item.name}</div>
                        <div class="admin-type-today">今日 +${formatAdminCount(today)}</div>
                    </div>
                    <div class="admin-type-bar-track">
                        <div class="admin-type-bar-fill" style="width:${width}%"></div>
                    </div>
                    <div class="admin-type-meta">7天新增 ${formatAdminCount(last7)} · 累计 ${formatAdminCount(total)}</div>
                </div>
            </article>
        `;
    }).join('');
}

function renderAdminOverview(data) {
    setMetric('adminTotalCompleted', data.totalCompleted);
    setMetric('adminTodayCompleted', data.todayCompleted);
    setMetric('adminYesterdayCompleted', data.yesterdayCompleted);
    setMetric('adminLast24HoursCompleted', data.last24HoursCompleted);
    setMetric('adminLast7DaysCompleted', data.last7DaysCompleted);
    setMetric('adminTrackedEventCount', data.trackedEventCount);

    const status = document.getElementById('adminStatus');
    if (status) {
        status.textContent = `后台已加载。当前总完成 ${formatAdminCount(data.totalCompleted)}，今日新增 ${formatAdminCount(data.todayCompleted)}。`;
    }

    const note = document.getElementById('adminHistoricalNote');
    if (note) {
        note.textContent = data.hasHistoricalBaseline
            ? `注意：还有 ${formatAdminCount(data.historicalBaselineCount)} 条历史累计数据没有逐条事件，新增趋势仅统计后台启用后的记录。`
            : '当前趋势数据与累计数据已完全对齐。';
    }

    renderTrend(data.trend);
    renderLatest(data.latestCompletions);
    renderTypes(data.typeBreakdown);
}

function renderAdminError(error) {
    const status = document.getElementById('adminStatus');
    if (status) {
        status.textContent = '后台数据加载失败，请确认管理员认证和服务状态。';
    }
    console.warn('Failed to load admin overview.', error);
}

document.addEventListener('DOMContentLoaded', () => {
    readAdminOverview().then(renderAdminOverview).catch(renderAdminError);
});
