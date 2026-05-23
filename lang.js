/* ============================================================
   DDON Festival – Language System
   Include this script on every festival page.
   Usage: window.t('key') → translated string
         window.setLang('de') → switch language
         window.getLang() → current language code
   ============================================================ */

const LANG_LABELS = {
    en: 'us English', jp: 'jp Japanese', zh: 'cn Chinese',
    pt: 'pt Portuguese', es: 'es Spanish', ru: 'ru Russian',
    tr: 'tr Turkish', pl: 'pl Polish', kr: 'kr Korean',
    it: 'it Italian', fr: 'fr French', gr: 'gr Greek', de: 'de German'
};

let _lang = localStorage.getItem('ddon_lang') || 'en';
let _translations = {};

async function _loadTranslations() {
    try {
        const r = await fetch('https://live.ddon.org/translations.json');
        if (r.ok) _translations = await r.json();
    } catch(_) {}
}

window.getLang = () => _lang;

window.setLang = (code) => {
    _lang = code;
    localStorage.setItem('ddon_lang', code);
    // Re-apply all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = window.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = window.t(el.getAttribute('data-i18n-placeholder'));
    });
    // Update selector if present
    const sel = document.getElementById('langSelectorLabel');
    if (sel) sel.textContent = LANG_LABELS[_lang] || _lang;
    // Close dropdown
    const dd = document.getElementById('langDropdown');
    if (dd) dd.style.display = 'none';
    // Fire custom event for pages that need to re-render
    window.dispatchEvent(new Event('langchange'));
};

window.t = (key, fallback) => {
    const langData = _translations[_lang] || {};
    const enData   = _translations['en'] || {};
    return langData[key] || enData[key] || fallback || key;
};

// Build language selector HTML
window.buildLangSelector = () => {
    const html = `
    <div style="position:relative;">
        <button id="langSelectorLabel" onclick="toggleLangDropdown()" style="
            background:transparent;border:1px solid #333;color:#888;
            padding:6px 14px;font-family:'Cinzel',serif;font-size:11px;
            letter-spacing:1px;cursor:pointer;transition:.2s;
        " onmouseover="this.style.borderColor='#c8a75d';this.style.color='#c8a75d';"
           onmouseout="this.style.borderColor='#333';this.style.color='#888';">
            ${LANG_LABELS[_lang] || _lang} 🌐
        </button>
        <div id="langDropdown" style="display:none;position:absolute;right:0;top:100%;
            background:#0f111f;border:1px solid #2a2d48;z-index:500;min-width:160px;
            max-height:320px;overflow-y:auto;">
            ${Object.entries(LANG_LABELS).map(([code, label]) =>
                `<div onclick="setLang('${code}')" style="padding:10px 16px;font-size:12px;
                color:${code===_lang?'#c8a75d':'#888'};letter-spacing:1px;cursor:pointer;
                font-family:'Cinzel',serif;transition:.2s;"
                onmouseover="this.style.color='#c8a75d';this.style.background='rgba(200,167,93,.08)';"
                onmouseout="this.style.color='${code===_lang?'#c8a75d':'#888'}';this.style.background='transparent';">
                ${label}</div>`
            ).join('')}
        </div>
    </div>`;
    return html;
};

window.toggleLangDropdown = () => {
    const dd = document.getElementById('langDropdown');
    if (dd) dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
};

// Close on outside click
document.addEventListener('click', e => {
    if (!e.target.closest('#langSelectorLabel') && !e.target.closest('#langDropdown')) {
        const dd = document.getElementById('langDropdown');
        if (dd) dd.style.display = 'none';
    }
});

// Auto-init
_loadTranslations().then(() => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = window.t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = window.t(el.getAttribute('data-i18n-placeholder'));
    });
});
