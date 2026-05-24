/* DDON Festival – Language System */

const LANG_LABELS = {
    en:'us English', jp:'jp Japanese', zh:'cn Chinese',
    pt:'pt Portuguese', es:'es Spanish', ru:'ru Russian',
    tr:'tr Turkish', pl:'pl Polish', kr:'kr Korean',
    it:'it Italian', fr:'fr French', gr:'gr Greek'
};

let _lang = localStorage.getItem('ddon_lang') || 'en';
let _translations = {};

async function _loadTranslations(){
    try{
        const r = await fetch('/translations.json');
        if(r.ok) _translations = await r.json();
    }catch(_){}
}

window.getLang = () => _lang;

window.t = function(key, fallback){
    const d = _translations[_lang] || {};
    const e = _translations['en'] || {};
    return d[key] || e[key] || fallback || key;
};

window.setLang = function(code){
    _lang = code;
    localStorage.setItem('ddon_lang', code);
    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        el.textContent = window.t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        el.placeholder = window.t(el.getAttribute('data-i18n-placeholder'));
    });
    // Update button label
    const lbl = document.getElementById('langSelectorLabel');
    if(lbl) lbl.textContent = (LANG_LABELS[_lang]||_lang) + ' 🌐';
    // Update active highlight
    document.querySelectorAll('.lang-opt').forEach(el=>{
        el.style.color = el.dataset.code === _lang ? '#c8a75d' : '#888';
    });
    // Close dropdown
    const dd = document.getElementById('langDropdown');
    if(dd) dd.style.display = 'none';
    // Notify pages
    window.dispatchEvent(new Event('langchange'));
};

window.toggleLangDropdown = function(){
    const dd = document.getElementById('langDropdown');
    if(!dd) return;
    dd.style.display = dd.style.display === 'none' ? 'block' : 'none';
};

function _buildSelector(){
    const wrap = document.getElementById('langSelectorWrap');
    if(!wrap) return;

    // Create toggle button
    const btn = document.createElement('button');
    btn.id = 'langSelectorLabel';
    btn.textContent = (LANG_LABELS[_lang]||_lang) + ' 🌐';
    btn.style.cssText = 'background:transparent;border:1px solid #333;color:#888;padding:6px 14px;font-family:Cinzel,serif;font-size:11px;letter-spacing:1px;cursor:pointer;white-space:nowrap;';
    btn.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        window.toggleLangDropdown();
    });
    btn.addEventListener('mouseover', () => { btn.style.borderColor='#c8a75d'; btn.style.color='#c8a75d'; });
    btn.addEventListener('mouseout',  () => { btn.style.borderColor='#333';    btn.style.color='#888'; });

    // Create dropdown
    const dd = document.createElement('div');
    dd.id = 'langDropdown';
    dd.style.cssText = 'display:none;position:absolute;right:0;top:100%;background:#0f111f;border:1px solid #2a2d48;z-index:9999;min-width:170px;max-height:340px;overflow-y:auto;box-shadow:0 8px 32px rgba(0,0,0,.9);';

    Object.entries(LANG_LABELS).forEach(([code, label]) => {
        const opt = document.createElement('div');
        opt.className = 'lang-opt';
        opt.dataset.code = code;
        opt.textContent = label;
        opt.style.cssText = `padding:12px 20px;font-size:12px;color:${code===_lang?'#c8a75d':'#888'};letter-spacing:1px;cursor:pointer!important;font-family:Cinzel,serif;transition:.15s;display:block;width:100%;box-sizing:border-box;user-select:none;`;
        opt.addEventListener('click', () => window.setLang(code));
        opt.addEventListener('mouseover', () => { opt.style.background='rgba(200,167,93,.1)'; opt.style.color='#c8a75d'; });
        opt.addEventListener('mouseout',  () => { opt.style.background=''; opt.style.color = code===_lang?'#c8a75d':'#888'; });
        dd.appendChild(opt);
    });

    const container = document.createElement('div');
    container.style.cssText = 'position:relative;';
    dd.addEventListener('click', e => e.stopPropagation());
    container.appendChild(btn);
    container.appendChild(dd);
    wrap.innerHTML = '';
    wrap.appendChild(container);
}

// Close on outside click
document.addEventListener('click', () => {
    const dd = document.getElementById('langDropdown');
    if(dd) dd.style.display = 'none';
});

// Init on DOM ready
document.addEventListener('DOMContentLoaded', async () => {
    await _loadTranslations();
    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        el.textContent = window.t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        el.placeholder = window.t(el.getAttribute('data-i18n-placeholder'));
    });
    _buildSelector();
});
