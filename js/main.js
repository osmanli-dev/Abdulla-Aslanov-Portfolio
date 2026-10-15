(() => {
  const I18N = window.I18N;
  const WORKS = window.WORKS;
  const LANGS = ['az', 'en', 'ru', 'tr'];
  const PAGE = 12; // works shown before "Show more"

  /* ---------- Language ---------- */
  const store = {
    get() { try { return localStorage.getItem('lang'); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem('lang', v); } catch (e) { /* private mode */ } }
  };

  const pickLang = () => {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    const saved = store.get();
    if (LANGS.includes(saved)) return saved;
    for (const l of navigator.languages || [navigator.language || '']) {
      const code = l.toLowerCase().slice(0, 2);
      if (LANGS.includes(code)) return code;
    }
    return 'az';
  };

  let lang = pickLang();
  const t = (key) => I18N[lang][key] ?? I18N.en[key] ?? key;

  const i18nEls = document.querySelectorAll('[data-i18n]');
  const i18nAttrEls = document.querySelectorAll('[data-i18n-attr]');
  const metaDesc = document.querySelector('meta[name="description"]');
  const langBtns = document.querySelectorAll('.lang button');

  /* ---------- Header: solid on scroll, mobile menu ---------- */
  const header = document.querySelector('.header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  const onScroll = () => header.classList.toggle('is-solid', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const menuOpen = () => header.classList.contains('is-open');
  const setMenu = (open) => {
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.open'));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setMenu(!menuOpen()));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menuOpen()) setMenu(false); });
  window.matchMedia('(min-width: 821px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Works grid ---------- */
  const grid = document.getElementById('grid');
  const moreBtn = document.getElementById('more');
  const chips = document.querySelectorAll('.chip');
  let filter = 'all';
  let expanded = false;

  const cards = WORKS.map((w) => {
    const fig = document.createElement('figure');
    fig.className = 'card';
    fig.dataset.cat = w.cat;
    fig.innerHTML = `
      <button class="card__btn" type="button">
        <img src="images/works/${w.file}-sm.webp" width="${w.w}" height="${w.h}" loading="lazy" decoding="async" alt="">
      </button>
      <figcaption><span class="card__title"></span><span class="card__meta"></span></figcaption>`;
    fig.work = w;
    grid.appendChild(fig);
    return fig;
  });

  const renderCardText = () => {
    cards.forEach((card) => {
      const w = card.work;
      const title = w.title[lang] || w.title.en;
      card.querySelector('.card__title').textContent = title;
      card.querySelector('.card__meta').textContent = t('cat.' + w.cat);
      card.querySelector('img').alt = title;
      card.querySelector('.card__btn').setAttribute('aria-label', `${t('works.open')}: ${title}`);
    });
  };

  const visibleCards = () => cards.filter((c) => !c.classList.contains('is-hidden'));

  const applyFilter = (animate) => {
    const matching = cards.filter((c) => filter === 'all' || c.dataset.cat === filter);
    const limit = expanded ? Infinity : PAGE;
    cards.forEach((card) => {
      const i = matching.indexOf(card);
      const show = i !== -1 && i < limit;
      const wasHidden = card.classList.contains('is-hidden');
      card.classList.toggle('is-hidden', !show);
      if (show && animate && wasHidden) {
        card.classList.add('is-entering');
        requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('is-entering')));
      }
    });
    moreBtn.hidden = matching.length <= limit;
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filter = chip.dataset.filter;
      expanded = false;
      chips.forEach((c) => {
        const active = c === chip;
        c.classList.toggle('is-active', active);
        c.setAttribute('aria-selected', String(active));
      });
      chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      cards.forEach((c) => c.classList.add('is-hidden'));
      applyFilter(true);
    });
  });

  moreBtn.addEventListener('click', () => {
    expanded = true;
    applyFilter(true);
  });

  /* ---------- Apply language ---------- */
  const applyLang = (next, save) => {
    lang = next;
    const dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict['meta.title'];
    if (metaDesc) metaDesc.content = dict['meta.description'];

    i18nEls.forEach((el) => { el.textContent = t(el.dataset.i18n); });
    i18nAttrEls.forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr, t(key));
      });
    });
    burger.setAttribute('aria-label', t(menuOpen() ? 'nav.close' : 'nav.open'));
    langBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    renderCardText();
    if (lb.open) updateCaption();

    if (save) {
      store.set(lang);
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    }
  };

  langBtns.forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true);
  }));

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Lightbox ---------- */
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbTitle = document.getElementById('lbTitle');
  const lbMeta = document.getElementById('lbMeta');
  const lbCount = document.getElementById('lbCount');
  const lbStage = document.getElementById('lbStage');
  let list = [];
  let index = 0;

  const fullSrc = (card) => `images/works/${card.work.file}.webp`;

  function updateCaption() {
    const w = list[index].work;
    lbTitle.textContent = w.title[lang] || w.title.en;
    lbMeta.textContent = t('cat.' + w.cat);
    lbImg.alt = lbTitle.textContent;
  }

  const show = (i) => {
    index = (i + list.length) % list.length;
    const card = list[index];

    lbImg.classList.add('is-loading');
    const full = new Image();
    full.onload = full.onerror = () => {
      if (list[index] !== card) return; // user already moved on
      lbImg.src = full.src;
      lbImg.classList.remove('is-loading');
    };
    full.src = fullSrc(card);

    updateCaption();
    lbCount.textContent = `${index + 1} / ${list.length}`;

    // warm up the neighbours so swiping feels instant
    [index + 1, index - 1].forEach((n) => {
      new Image().src = fullSrc(list[(n + list.length) % list.length]);
    });
  };

  const open = (card) => {
    list = visibleCards();
    show(list.indexOf(card));
    if (typeof lb.showModal === 'function') lb.showModal();
    else lb.setAttribute('open', '');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    if (typeof lb.close === 'function') lb.close();
    else lb.removeAttribute('open');
  };

  lb.addEventListener('close', () => { document.body.style.overflow = ''; });

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.card__btn');
    if (btn) open(btn.closest('.card'));
  });

  document.getElementById('lbPrev').addEventListener('click', () => show(index - 1));
  document.getElementById('lbNext').addEventListener('click', () => show(index + 1));
  document.getElementById('lbClose').addEventListener('click', close);

  // click on empty space around the photo closes
  lbStage.addEventListener('click', (e) => { if (e.target === lbStage) close(); });

  document.addEventListener('keydown', (e) => {
    if (!lb.open) return;
    if (e.key === 'ArrowRight') show(index + 1);
    if (e.key === 'ArrowLeft') show(index - 1);
  });

  // swipe left/right to navigate, swipe down to close
  let sx = 0, sy = 0, tracking = false;
  lbStage.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) { tracking = false; return; }
    tracking = true;
    sx = e.touches[0].clientX;
    sy = e.touches[0].clientY;
  }, { passive: true });

  lbStage.addEventListener('touchend', (e) => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) close();
  }, { passive: true });

  /* ---------- Init ---------- */
  applyFilter(false);
  applyLang(lang, false);
})();
