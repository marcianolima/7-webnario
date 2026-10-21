/* GeoCanoas / Reveal.js 6.0.2 — configuração sem backend. */
(() => {
  'use strict';
  const root = document.documentElement;
  const toggle = document.querySelector('#theme-toggle');
  const key = 'geocanoas:theme';
  function themeOfStorage() {
    try { return localStorage.getItem(key) || 'dark'; } catch { return 'dark'; }
  }
  function themeApply(value) {
    const chosen = value === 'light' ? 'light' : 'dark';
    root.dataset.theme = chosen;
    toggle?.setAttribute('aria-pressed', String(chosen === 'light'));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', chosen === 'light' ? '#f4f7f8' : '#091827');
    try { localStorage.setItem(key, chosen); } catch { /* Acesso local opcional */ }
  }
  themeApply(themeOfStorage());
  toggle?.addEventListener('click', () => themeApply(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  if (typeof Reveal === 'undefined') {
    const el = document.createElement('div');
    el.textContent = 'Não foi possível carregar Reveal.js. Verifique a conexão de rede e recarregue a página.';
    el.style.cssText = 'position:fixed;top:90px;left:20px;padding:20px;background:#fff;color:#111;z-index:1000';
    document.body.append(el);
    return;
  }
  const isPrint = new URLSearchParams(location.search).has('print-pdf');
  if (isPrint) {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      img.loading = 'eager';
    });
  }

  // Capturas WebP são servidas pelo Portal GeoCanoas. Não dependemos de
  // URLs assinadas de expiração curta; fallback local mantém a palestra íntegra.
  // O slide só recebe o selo 'visual ilustrativo' quando o fallback foi ativado.
  document.addEventListener('error', event => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;
    const fallback = img.dataset.fallback;
    if (!fallback || img.dataset.fallbackUsed === '1') return;
    img.dataset.fallbackUsed = '1';
    img.closest('.official-photo')?.setAttribute('data-image-state', 'fallback');
    img.src = fallback;
  }, true);
  document.addEventListener('load', event => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;
    if (img.dataset.fallback && img.dataset.fallbackUsed !== '1') {
      img.closest('.official-photo')?.setAttribute('data-image-state','official');
    }
  }, true);

  Reveal.initialize({
    width: 1600, height: 900, margin: 0, minScale: 0.12, maxScale: 1.6,
    scrollActivationWidth: 800, scrollProgress: 'auto',
    controls: true, controlsLayout: 'bottom-right', progress: true,
    slideNumber: 'c/t', hash: true,
    center: false, navigationMode: 'default', keyboard: true, touch: true,
    overview: true, help: true, mouseWheel: false,
    fragments: true, fragmentInURL: false,
    transition: 'fade', backgroundTransition: 'fade', transitionSpeed: 'default',
    autoAnimate: true, autoAnimateDuration: 0.65,
    autoAnimateEasing: 'ease-in-out', autoAnimateUnmatched: false,
    pdfSeparateFragments: false, pdfMaxPagesPerSlide: 1,
    defaultTiming: 240, viewDistance: 2, mobileViewDistance: 1,
    plugins: typeof RevealNotes !== 'undefined' ? [RevealNotes] : []
  }).then(() => {
    Reveal.addKeyBinding({ keyCode: 84, key: 'T', description: 'Alternar tema' }, () => {
      themeApply(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }).catch(error => console.error('Erro no Reveal.js:', error));
})();