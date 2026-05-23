/* DDON Festival – Language System */

const LANG_LABELS = {
    en: 'us English', jp: 'jp Japanese', zh: 'cn Chinese',
    pt: 'pt Portuguese', es: 'es Spanish', ru: 'ru Russian',
    tr: 'tr Turkish', pl: 'pl Polish', kr: 'kr Korean',
    it: 'it Italian', fr: 'fr French', gr: 'gr Greek'
};

let _lang = localStorage.getItem('ddon_lang') || 'en';
let _translations = {};
let _loaded = false;

async function _loadTranslations() {
    try {
        const r = await fetch('/translations.json');
        if (r.ok) { _translations = await r.json(); _loaded = true; }
    } catch(_) {}
}

window.getLang = () => _lang;

window.setLang = function(code) {
    _lang = code;
    localStorage.setItem('ddon_lang', code);
    _applyAll();
    // Update button label
    const lbl = document.getElementById('langSelectorLabel');
    if (lbl) lbl.textContent = (LANG_LABELS[_lang] || _lang) + ' 🌐';
    // Close dropdown
    const dd = document.getElementById('langDropdown');
    if (dd) dd.style.display = 'none';
    window.dispatchEvent(new Event('langchange'));
};

window.t = function(key, fallback) {
    const d = _translations[_lang] || {};
    const e = _translations['en'] || {};
    return d[key] || e[key] || fallback || key;
};

function _applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = window.t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = window.t(el.getAttribute('data-i18n-placeholder'));
    });
    // Update dropdown option highlights
    document.querySelectorAll('.lang-opt').forEach(el => {
        el.style.color = el.dataset.code === _lang ? '#c8a75d' : '#888';
    });
}

window.toggleLangDropdown = function() {
    const dd = document.getElementById('langDropdown');
    if (!dd) return;
    dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
};

window.buildLangSelector = function() {
    // Build options HTML
    const opts = Object.entries(LANG_LABELS).map(([code, label]) =>
        `<div class="lang-opt" data-code="${code}" style="padding:10px 16px;font-size:12px;
         color:${code===_lang?'#c8a75d':'#888'};letter-spacing:1px;cursor:pointer;
         font-family:'Cinzel',serif;">${label}</div>`
    ).join('');

    return `<div style="position:relative;">
        <button id="langSelectorLabel" onclick="toggleLangDropdown()" style="
            background:transparent;border:1px solid #333;color:#888;
            padding:6px 14px;font-family:'Cinzel',serif;font-size:11px;
            letter-spacing:1px;cursor:pointer;white-space:nowrap;
        ">${LANG_LABELS[_lang] || _lang} 🌐</button>
        <div id="langDropdown" style="display:none;position:absolute;right:0;top:100%;
            background:#0f111f;border:1px solid #2a2d48;z-index:9999;min-width:160px;
            max-height:340px;overflow-y:auto;box-shadow:0 4px 20px rgba(0,0,0,.8);">
            ${opts}
        </div>
    </div>`;
};

// Use event delegation for lang options (works after innerHTML inject)
document.addEventListener('click', function(e) {
    const opt = e.target.closest('.lang-opt');
    if (opt && opt.dataset.code) {
        window.setLang(opt.dataset.code);
        return;
    }
    // Close dropdown on outside click
    if (!e.target.closest('#langSelectorLabel') && !e.target.closest('#langDropdown')) {
        const dd = document.getElementById('langDropdown');
        if (dd) dd.style.display = 'none';
    }
});

// Hover effect via delegation
document.addEventListener('mouseover', function(e) {
    const opt = e.target.closest('.lang-opt');
    if (opt) { opt.style.background = 'rgba(200,167,93,.1)'; opt.style.color = '#c8a75d'; }
});
document.addEventListener('mouseout', function(e) {
    const opt = e.target.closest('.lang-opt');
    if (opt) { opt.style.background = ''; opt.style.color = opt.dataset.code === _lang ? '#c8a75d' : '#888'; }
});

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', async function() {
    await _loadTranslations();
    _applyAll();
    // Inject selector into wrapper if present
    const wrap = document.getElementById('langSelectorWrap');
    if (wrap && window.buildLangSelector) {
        wrap.innerHTML = window.buildLangSelector();
    }
});
