(function () {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  if (currentFile === 'index.html' || currentFile === '') return;
  if (document.getElementById('ddon-global-nav')) return;

  if (!document.querySelector('link[href*="Cinzel"]')) {
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap';
    document.head.appendChild(font);
  }

  const pages = [
    { key: 'home',           label: 'Home',            href: 'index.html' },
    { key: 'news',           label: 'News',            href: 'index.html#news' },
    { key: 'status',         label: 'Server Status',   href: 'index.html#status' },
    { key: 'leaderboard',    label: 'Leaderboard',     href: 'leaderboard.html' },
    { key: 'howToPlay',      label: 'How To Play',     href: 'howtoplay.html' },
    { key: 'wiki',           label: 'Wiki',            href: 'wiki.html' },
    { key: 'customFeatures', label: 'Custom Features', href: 'custom.html' },
  ];

  function getLabel(p) {
    try {
      const lang = localStorage.getItem('lang') || 'en';
      const t = window.translations?.[lang];
      return (t && t[p.key]) ? t[p.key] : p.label;
    } catch (e) { return p.label; }
  }

  const nav = document.createElement('nav');
  nav.id = 'ddon-global-nav';
  Object.assign(nav.style, {
    position: 'sticky', top: '0', zIndex: '99999',
    background: '#1b1b25', borderBottom: '2px solid #c8a75d',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '13px 30px', fontFamily: "'Cinzel', serif",
    boxSizing: 'border-box', flexWrap: 'wrap', gap: '10px',
  });

  const logo = document.createElement('a');
  logo.href = 'index.html';
  logo.textContent = 'DDON Revival';
  Object.assign(logo.style, {
    color: '#e6e6e6', textDecoration: 'none', fontWeight: '700', fontSize: '15px',
  });

  const links = document.createElement('div');
  Object.assign(links.style, { display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' });

  const linkEls = [];
  pages.forEach(p => {
    const a = document.createElement('a');
    a.href = p.href;
    a.textContent = getLabel(p);
    const isActive = p.href.split('#')[0] === currentFile;
    Object.assign(a.style, {
      color: isActive ? '#c8a75d' : '#e6e6e6', fontWeight: isActive ? '700' : '400',
      textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s',
    });
    a.addEventListener('mouseenter', () => { a.style.color = '#c8a75d'; });
    a.addEventListener('mouseleave', () => { if (!isActive) a.style.color = '#e6e6e6'; });
    links.appendChild(a);
    linkEls.push({ el: a, page: p });
  });

  const loginA = document.createElement('a');
  loginA.href = 'login.html';
  loginA.textContent = 'Login';
  Object.assign(loginA.style, {
    color: '#c8a75d', fontWeight: currentFile === 'login.html' ? '900' : '700',
    fontSize: '13px', textDecoration: 'none', transition: 'opacity 0.2s',
  });
  loginA.addEventListener('mouseenter', () => { loginA.style.opacity = '0.75'; });
  loginA.addEventListener('mouseleave', () => { loginA.style.opacity = '1'; });
  links.appendChild(loginA);

  // Language selector
  const langWrap = document.createElement('div');
  Object.assign(langWrap.style, { position: 'relative', display: 'inline-block' });

  const langBtn = document.createElement('button');
  langBtn.textContent = '🌍';
  Object.assign(langBtn.style, {
    background: '#1b1b25', border: '1px solid #c8a75d', color: '#c8a75d',
    padding: '5px 10px', cursor: 'pointer', fontFamily: "'Cinzel', serif", fontSize: '13px',
  });

  const langDrop = document.createElement('div');
  Object.assign(langDrop.style, {
    display: 'none', position: 'absolute', right: '0', top: '100%',
    background: '#1b1b25', border: '1px solid #c8a75d', zIndex: '100000', minWidth: '130px',
  });

  langBtn.addEventListener('click', () => {
    langDrop.style.display = langDrop.style.display === 'none' ? 'block' : 'none';
  });
  document.addEventListener('click', e => {
    if (!langWrap.contains(e.target)) langDrop.style.display = 'none';
  });

  function applyLang(code) {
    localStorage.setItem('lang', code);
    linkEls.forEach(({ el, page }) => { el.textContent = getLabel(page); });
    if (typeof window.setLanguage === 'function') window.setLanguage(code);
    langDrop.style.display = 'none';
  }

  function buildLangDropdown() {
    langDrop.innerHTML = '';
    const langs = window.languages || [
      { code: 'en', flag: '🇬🇧', name: 'English' },
      { code: 'jp', flag: '🇯🇵', name: '日本語' },
    ];
    langs.forEach(lang => {
      const item = document.createElement('div');
      item.textContent = lang.flag + ' ' + lang.name;
      Object.assign(item.style, {
        padding: '7px 12px', cursor: 'pointer', fontSize: '13px', color: '#e6e6e6',
      });
      item.addEventListener('mouseenter', () => { item.style.background = '#2a2a35'; });
      item.addEventListener('mouseleave', () => { item.style.background = 'transparent'; });
      item.addEventListener('click', () => applyLang(lang.code));
      langDrop.appendChild(item);
    });
  }

  langWrap.appendChild(langBtn);
  langWrap.appendChild(langDrop);
  nav.appendChild(logo);
  nav.appendChild(links);
  nav.appendChild(langWrap);
  document.body.insertBefore(nav, document.body.firstChild);

  // Hide existing page headers that are purely navigation (contain <nav> tag)
  document.querySelectorAll('body > header').forEach(h => {
    if (h.querySelector('nav')) h.style.display = 'none';
  });

  if (window.languages) buildLangDropdown();
  window.addEventListener('load', () => {
    buildLangDropdown();
    linkEls.forEach(({ el, page }) => { el.textContent = getLabel(page); });
  });
})();
