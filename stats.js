const STATS_MESSAGES = {
    'zh-cn': {
        total: (count) => `当前成功完成测评人数：${count.toLocaleString('zh-CN')}`,
        totalLoading: '当前成功完成测评人数：加载中...',
        result: (count) => `已有 ${count.toLocaleString('zh-CN')} 人获得该结果`
    },
    'zh-hant': {
        total: (count) => `目前成功完成測評人數：${count.toLocaleString('zh-Hant')}`,
        totalLoading: '目前成功完成測評人數：載入中...',
        result: (count) => `已有 ${count.toLocaleString('zh-Hant')} 人獲得這個結果`
    },
    ja: {
        total: (count) => `現在までの診断完了人数：${count.toLocaleString('ja-JP')}`,
        totalLoading: '現在までの診断完了人数：読み込み中...',
        result: (count) => `この結果になった人：${count.toLocaleString('ja-JP')}人`
    },
    ko: {
        total: (count) => `현재 테스트 완료 인원: ${count.toLocaleString('ko-KR')}명`,
        totalLoading: '현재 테스트 완료 인원: 불러오는 중...',
        result: (count) => `이 결과를 받은 사람: ${count.toLocaleString('ko-KR')}명`
    },
    fr: {
        total: (count) => `Personnes ayant terminé le test : ${count.toLocaleString('fr-FR')}`,
        totalLoading: 'Personnes ayant terminé le test : chargement...',
        result: (count) => `${count.toLocaleString('fr-FR')} personnes ont obtenu ce résultat`
    },
    de: {
        total: (count) => `Bisher abgeschlossene Tests: ${count.toLocaleString('de-DE')}`,
        totalLoading: 'Bisher abgeschlossene Tests: wird geladen...',
        result: (count) => `${count.toLocaleString('de-DE')} Personen haben dieses Ergebnis erhalten`
    },
    it: {
        total: (count) => `Test completati finora: ${count.toLocaleString('it-IT')}`,
        totalLoading: 'Test completati finora: caricamento...',
        result: (count) => `${count.toLocaleString('it-IT')} persone hanno ottenuto questo risultato`
    },
    en: {
        total: (count) => `Completed assessments so far: ${count.toLocaleString('en-US')}`,
        totalLoading: 'Completed assessments so far: loading...',
        result: (count) => `${count.toLocaleString('en-US')} people got this result`
    },
    bn: {
        total: (count) => `এখন পর্যন্ত সফলভাবে টেস্ট শেষ করেছে: ${count.toLocaleString('bn-BD')} জন`,
        totalLoading: 'এখন পর্যন্ত সফলভাবে টেস্ট শেষ করেছে: লোড হচ্ছে...',
        result: (count) => `${count.toLocaleString('bn-BD')} জন এই ফল পেয়েছে`
    },
    ru: {
        total: (count) => `Успешно завершили тест: ${count.toLocaleString('ru-RU')}`,
        totalLoading: 'Успешно завершили тест: загрузка...',
        result: (count) => `${count.toLocaleString('ru-RU')} человек получили этот результат`
    },
    pt: {
        total: (count) => `Testes concluídos com sucesso: ${count.toLocaleString('pt-PT')}`,
        totalLoading: 'Testes concluídos com sucesso: a carregar...',
        result: (count) => `${count.toLocaleString('pt-PT')} pessoas tiveram este resultado`
    },
    hi: {
        total: (count) => `अब तक सफलतापूर्वक टेस्ट पूरा करने वाले: ${count.toLocaleString('en-IN')}`,
        totalLoading: 'अब तक सफलतापूर्वक टेस्ट पूरा करने वाले: लोड हो रहा है...',
        result: (count) => `${count.toLocaleString('en-IN')} लोगों को यह रिजल्ट मिला`
    }
};

function getStatsCopy() {
    const lang = (document.documentElement.lang || 'en').toLowerCase();
    return STATS_MESSAGES[lang] || STATS_MESSAGES.en;
}

function getResultCode() {
    const node = document.getElementById('resultTypeName');
    if (!node) return null;
    const match = node.textContent.trim().match(/^([A-Za-z0-9!.-]+)/);
    return match ? match[1] : null;
}

async function readSummary() {
    const res = await fetch('/api/stats/summary', { credentials: 'same-origin' });
    if (!res.ok) throw new Error(`Summary request failed: ${res.status}`);
    return res.json();
}

async function recordResult(typeCode) {
    const res = await fetch('/api/stats/record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ typeCode })
    });
    if (!res.ok) throw new Error(`Record request failed: ${res.status}`);
    return res.json();
}

function updateTotalCount(count) {
    const el = document.getElementById('statsTotalText');
    if (!el) return;
    el.textContent = getStatsCopy().total(count);
}

function showResultCount(count) {
    const banner = document.getElementById('resultCountBanner');
    if (!banner) return;
    banner.textContent = getStatsCopy().result(count);
    banner.hidden = false;
}

function hideResultCount() {
    const banner = document.getElementById('resultCountBanner');
    if (!banner) return;
    banner.hidden = true;
    banner.textContent = '';
}

function initStats() {
    const totalEl = document.getElementById('statsTotalText');
    if (totalEl) {
        totalEl.textContent = getStatsCopy().totalLoading;
        readSummary()
            .then((data) => updateTotalCount(Number(data.totalCompleted || 0)))
            .catch(() => {
                totalEl.textContent = getStatsCopy().total(0);
            });
    }

    const submitBtn = document.getElementById('submitBtn');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', () => {
        hideResultCount();
        window.setTimeout(async () => {
            const typeCode = getResultCode();
            if (!typeCode) return;
            try {
                const data = await recordResult(typeCode);
                updateTotalCount(Number(data.totalCompleted || 0));
                showResultCount(Number(data.typeCount || 0));
            } catch (error) {
                console.warn('Failed to record SBTI stats.', error);
            }
        }, 0);
    });
}

document.addEventListener('DOMContentLoaded', initStats);
