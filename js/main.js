(function () {
  'use strict';

  /* ═══════════════════════════════════════════════
     i18n
  ═══════════════════════════════════════════════ */
  const T = {
    es: {
      'nav.home':               'Inicio',
      'nav.about':              'Sobre mí',
      'nav.resume':             'Currículum',
      'nav.contact':            'Contacto',
      'hero.badge':             'Disponible para proyectos',
      'hero.title.line1':       'Rodrigo',
      'hero.title.line2':       'Díaz-Hellín',
      'hero.lead':              'Desarrollador Fullstack .NET y Mobile — C#, MAUI, Angular, APIs y diseño de experiencia.',
      'hero.cta_cv':            'Ver CV',
      'hero.cta_contact':       'Contacto',
      'about.tag':              'Sobre mí',
      'about.title':            'Sobre mí',
      'about.name_label':       'Nombre',
      'about.name':             'Rodrigo Díaz‑Hellín',
      'about.site_label':       'Sitio',
      'about.site':             'linkedin.com/in/rodrigodhv262',
      'about.country_label':    'País',
      'about.country':          'España',
      'about.age_label':        'Edad',
      'about.age':              '28',
      'about.degree_label':     'Titulación',
      'about.degree':           'Ingeniero Informático',
      'about.email_label':      'Correo',
      'about.email':            'rodrigodhv@gmail.com',
      'about.exp_years_label':  'Años de experiencia',
      'about.awards_label':     'Reconocimiento',
      'about.awards_sub':       'Ing. Informática',
      'resume.tag':             'Currículum',
      'resume.title':           'Currículum',
      'resume.education_title': 'Formación',
      'resume.experience_title':'Experiencia',
      'resume.download':        'Descargar CV (PDF)',
      'services.tag':           'Herramientas',
      'services.title':         'Herramientas y tecnologías',
      'contact.tag':            'Contacto',
      'contact.title':          'Contacto',
      'contact.email_label':    'Correo',
      'footer.copyright':       '© 2026 Rodrigo Díaz-Hellín. Todos los derechos reservados.'
    },
    en: {
      'nav.home':               'Home',
      'nav.about':              'About',
      'nav.resume':             'Resume',
      'nav.contact':            'Contact',
      'hero.badge':             'Available for projects',
      'hero.title.line1':       'Rodrigo',
      'hero.title.line2':       'Díaz-Hellín',
      'hero.lead':              'Fullstack & Mobile developer — C#, .NET, MAUI, Angular, APIs and modern UX.',
      'hero.cta_cv':            'View CV',
      'hero.cta_contact':       'Contact',
      'about.tag':              'About',
      'about.title':            'About me',
      'about.name_label':       'Name',
      'about.name':             'Rodrigo Díaz‑Hellín',
      'about.site_label':       'Website',
      'about.site':             'linkedin.com/in/rodrigodhv262',
      'about.country_label':    'Country',
      'about.country':          'Spain',
      'about.age_label':        'Age',
      'about.age':              '28',
      'about.degree_label':     'Degree',
      'about.degree':           'Computer Science Engineer',
      'about.email_label':      'Email',
      'about.email':            'rodrigodhv@gmail.com',
      'about.exp_years_label':  'Years of experience',
      'about.awards_label':     'Award',
      'about.awards_sub':       'Computer Science Eng.',
      'resume.tag':             'Resume',
      'resume.title':           'Resume',
      'resume.education_title': 'Education',
      'resume.experience_title':'Experience',
      'resume.download':        'Download CV (PDF)',
      'services.tag':           'Tools',
      'services.title':         'Tools & technologies',
      'contact.tag':            'Contact',
      'contact.title':          'Contact',
      'contact.email_label':    'Email',
      'footer.copyright':       '© 2026 Rodrigo Díaz-Hellín. All rights reserved.'
    }
  };

  let lang = localStorage.getItem('lang') ||
    ((navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es');

  function applyLang(l) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (T[l] && T[l][k] !== undefined) el.innerHTML = T[l][k];
    });
    document.documentElement.lang = l;
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = l === 'en' ? 'ES' : 'EN';
    lang = l;
    localStorage.setItem('lang', l);
  }

  applyLang(lang);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(lang === 'en' ? 'es' : 'en');
  });

  /* ═══════════════════════════════════════════════
     TOOLS GRID
  ═══════════════════════════════════════════════ */
  const tools = [
    { name: 'C#',      icon: 'https://img.icons8.com/color/48/c-sharp-logo.png',            pct: 95 },
    { name: '.NET',    icon: 'https://img.icons8.com/color/48/net-framework.png',           pct: 90 },
    { name: 'MAUI',    icon: 'https://img.icons8.com/color/48/xamarin.png',                 pct: 90 },
    { name: 'Angular', icon: 'https://img.icons8.com/color/48/angularjs.png',               pct: 75 },
    { name: 'XAML',    icon: 'https://img.icons8.com/color/48/xaml.png',                    pct: 80 },
    { name: 'SQL',     icon: 'https://img.icons8.com/color/48/sql.png',                     pct: 75 },
    { name: 'VS',      icon: 'https://img.icons8.com/color/48/visual-studio--v2.png',       pct: 90 },
    { name: 'VS Code', icon: 'https://img.icons8.com/color/48/visual-studio-code-2019.png', pct: 80 },
    { name: 'Postman', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png', pct: 75 },
    { name: 'Azure',   icon: 'https://img.icons8.com/color/48/azure-1.png',                 pct: 70 },
    { name: 'Git',     icon: 'https://img.icons8.com/color/48/git.png',                     pct: 80 },
    { name: 'CSS',     icon: 'https://img.icons8.com/color/48/css3.png',                    pct: 50 },
    { name: 'HTML',    icon: 'https://img.icons8.com/color/48/html-5--v1.png',              pct: 50 },
  ];

  const CIRC = 2 * Math.PI * 22;

  const grid = document.getElementById('tools-grid');
  if (grid) {
    tools.forEach((t) => {
      const dashOffset = CIRC * (1 - t.pct / 100);
      const div = document.createElement('div');
      div.className = 'glass tool-card';
      div.innerHTML = `
        <img class="tool-icon" src="${t.icon}" alt="${t.name}" loading="lazy">
        <div class="tool-name">${t.name}</div>
        <div class="ring-wrap">
          <svg width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
            <circle class="ring-bg" cx="26" cy="26" r="22"/>
            <circle class="ring-bar" cx="26" cy="26" r="22"
              style="stroke-dasharray:${CIRC.toFixed(2)};stroke-dashoffset:${CIRC.toFixed(2)}"
              data-offset="${dashOffset.toFixed(2)}"/>
          </svg>
          <div class="ring-label">${t.pct}%</div>
        </div>`;
      grid.appendChild(div);
    });
  }

  /* ═══════════════════════════════════════════════
     SKILL BARS
     Usa IntersectionObserver sobre el contenedor.
     También dispara al cargar si ya es visible.
  ═══════════════════════════════════════════════ */
  function initSkillBars() {
    const section = document.getElementById('skills-section');
    if (!section) return;

    const run = () => {
      document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = (bar.dataset.width || 0) + '%';
      });
    };

    // Dispara inmediatamente si ya está en pantalla
    if (section.getBoundingClientRect().top < window.innerHeight) {
      setTimeout(run, 100);
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { run(); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(section);
  }

  /* ═══════════════════════════════════════════════
     RING BARS
     Se ejecuta tras renderizar las cards (rAF).
  ═══════════════════════════════════════════════ */
  function initRings() {
    const container = document.getElementById('tools-grid');
    if (!container) return;

    const run = () => {
      document.querySelectorAll('.ring-bar').forEach(ring => {
        ring.style.strokeDashoffset = ring.dataset.offset;
      });
    };

    // rAF garantiza que las cards ya están en el DOM antes de observar
    requestAnimationFrame(() => {
      if (container.getBoundingClientRect().top < window.innerHeight) {
        setTimeout(run, 100);
        return;
      }
      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { run(); obs.disconnect(); }
      }, { threshold: 0.05 });
      obs.observe(container);
    });
  }

  initSkillBars();
  initRings();

  /* ═══════════════════════════════════════════════
     NAVBAR SCROLL + ACTIVE LINK
  ═══════════════════════════════════════════════ */
  const header  = document.getElementById('header');
  const backTop = document.getElementById('back-top');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 60);
    if (backTop) backTop.classList.toggle('show', window.scrollY > 300);

    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ═══════════════════════════════════════════════
     SMOOTH SCROLL
  ═══════════════════════════════════════════════ */
  document.querySelectorAll('.scrollto').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - header.offsetHeight,
          behavior: 'smooth'
        });
        document.getElementById('nav-mobile-overlay').classList.remove('open');
      }
    });
  });

  /* ═══════════════════════════════════════════════
     MOBILE NAV
  ═══════════════════════════════════════════════ */
  document.getElementById('nav-open').addEventListener('click', () => {
    document.getElementById('nav-mobile-overlay').classList.add('open');
  });
  document.getElementById('nav-close').addEventListener('click', () => {
    document.getElementById('nav-mobile-overlay').classList.remove('open');
  });

  /* ═══════════════════════════════════════════════
     BACK TO TOP
  ═══════════════════════════════════════════════ */
  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
