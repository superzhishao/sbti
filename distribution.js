function formatCount(count) {
    return Number(count || 0).toLocaleString('zh-CN');
}

async function readDistribution() {
    const res = await fetch('/api/stats/distribution', { credentials: 'same-origin' });
    if (!res.ok) throw new Error(`Distribution request failed: ${res.status}`);
    return res.json();
}

function renderDistribution(data) {
    const total = Number(data.totalCompleted || 0);
    const list = Array.isArray(data.distribution) ? data.distribution : [];
    const totalText = document.getElementById('distributionTotalText');
    const root = document.getElementById('distributionList');
    if (!totalText || !root) return;

    totalText.textContent = `总测评人数：${formatCount(total)} 人`;

    if (!list.length) {
        root.innerHTML = '<div class="distribution-empty">暂时还没有人格分布数据。</div>';
        return;
    }

    const maxCount = Math.max(...list.map((item) => Number(item.count || 0)), 1);
    root.innerHTML = list
        .map((item, index) => {
            const count = Number(item.count || 0);
            const ratio = total > 0 ? ((count / total) * 100).toFixed(2) : '0.00';
            const barWidth = Math.max((count / maxCount) * 100, count > 0 ? 6 : 0);
            const imageSrc = item.imagePath || '';
            return `
                <article class="distribution-card">
                    <div class="distribution-rank">#${index + 1}</div>
                    <div class="distribution-image-wrap">
                        <img class="distribution-image" src="${imageSrc}" alt="${item.code} ${item.name}" loading="lazy" />
                    </div>
                    <div class="distribution-content">
                        <div class="distribution-heading">
                            <div>
                                <div class="distribution-code">${item.code}</div>
                                <div class="distribution-name">${item.name}</div>
                            </div>
                            <div class="distribution-count">${formatCount(count)} 人</div>
                        </div>
                        <div class="distribution-intro">${item.intro || ''}</div>
                        <div class="distribution-bar-track">
                            <div class="distribution-bar-fill" style="width:${barWidth}%"></div>
                        </div>
                        <div class="distribution-meta">占总样本 ${ratio}%</div>
                    </div>
                </article>
            `;
        })
        .join('');
}

function renderError() {
    const totalText = document.getElementById('distributionTotalText');
    const root = document.getElementById('distributionList');
    if (totalText) totalText.textContent = '总测评人数：加载失败';
    if (root) root.innerHTML = '<div class="distribution-empty">人格分布加载失败，请稍后再试。</div>';
}

document.addEventListener('DOMContentLoaded', () => {
    readDistribution().then(renderDistribution).catch(renderError);
});
