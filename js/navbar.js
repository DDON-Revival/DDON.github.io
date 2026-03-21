(function () {
  // Skip on homepage (has its own full header)
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  if (currentFile === 'index.html' || currentFile === '') return;

  // Prevent double-inject
  if (document.getElementById('ddon-global-nav')) return;

  // Cinzel font (if not already loaded)
  if (!document.querySelector('link[href*="Cinzel"]')) {
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap';
    document.head.appendChild(font);
  }

  // Nav items — same order as index.html
  const pages = [
    { key: 'home',           label: 'Home',            href: 'index.html' },
    { key: 'news',           label: 'News',            href: 'index.html#news' },
    { key: 'status',         label: 'Server Status',   href: 'index.html#status' },
    { key: 'leaderboard',    label: 'Leaderboard',     href: 'leaderboard.html' },
    { key: 'howToPlay',      label: 'How To Play',     href: 'howtoplay.html' },
    { key: 'wiki',           label: 'Wiki',            href: 'wiki.html' },
    { key: 'customFeatures', label: 'Custom Features', href: 'custom.html' },
  ];

  // Resolve translated label if translations.js is loaded
  function label(p) {
    try {
      const lang = localStorage.getItem('lang') || 'en';
      const t = window.translations?.[lang];
      return (t && t[p.key]) ? t[p.key] : p.label;
    } catch (e) { return p.label; }
  }

  // Build nav
  const nav = document.createElement('nav');
  nav.id = 'ddon-global-nav';
  Object.assign(nav.style, {
    position:       'sticky',
    top:            '0',
    zIndex:         '99999',
    background:     '#1b1b25',
    borderBottom:   '2px solid #c8a75d',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        '13px 30px',
    fontFamily:     "'Cinzel', serif",
    boxSizing:      'border-box',
    flexWrap:       'wrap',
    gap:            '10px',
  });

  // Logo
  const logo = document.createElement('a');
  logo.href = 'index.html';
  logo.textContent = 'DDON Revival';
  Object.assign(logo.style, {
    color:          '#e6e6e6',
    textDecoration: 'none',
    fontWeight:     '700',
    fontSize:       '15px',
    letterSpacing:  '0.5px',
  });

  // Links wrapper
  const links = document.createElement('div');
  Object.assign(links.style, {
    display:    'flex',
    gap:        '18px',
    alignItems: 'center',
    flexWrap:   'wrap',
  });

  pages.forEach(p => {
    const a = document.createElement('a');
    a.href = p.href;
    a.textContent = label(p);

    const fileMatch = p.href.split('#')[0];
    const isActive  = fileMatch === currentFile;

    Object.assign(a.style, {
      color:          isActive ? '#c8a75d' : '#e6e6e6',
      fontWeight:     isActive ? '700' : '400',
      textDecoration: 'none',
      fontSize:       '13px',
      transition:     'color 0.2s',
    });
    a.addEventListener('mouseenter', () => { a.style.color = '#c8a75d'; });
    a.addEventListener('mouseleave', () => { if (!isActive) a.style.color = '#e6e6e6'; });
    links.appendChild(a);
  });

  // Login (always gold)
  const loginA = document.createElement('a');
  loginA.href = 'login.html';
  loginA.textContent = 'Login';
  const loginIsActive = currentFile === 'login.html';
  Object.assign(loginA.style, {
    color:          '#c8a75d',
    fontWeight:     loginIsActive ? '900' : '700',
    fontSize:       '13px',
    textDecoration: 'none',
    transition:     'opacity 0.2s',
  });
  loginA.addEventListener('mouseenter', () => { loginA.style.opacity = '0.75'; });
  loginA.addEventListener('mouseleave', () => { loginA.style.opacity = '1'; });
  links.appendChild(loginA);

  nav.appendChild(logo);
  nav.appendChild(links);

  // Insert as very first child of body
  document.body.insertBefore(nav, document.body.firstChild);

  // Re-apply translated labels after translations.js might have loaded
  window.addEventListener('load', () => {
    const allLinks = links.querySelectorAll('a');
    pages.forEach((p, i) => {
      allLinks[i].textContent = label(p);
    });
  });
})();
