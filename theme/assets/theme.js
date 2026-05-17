/* DRINK MILK — Theme JavaScript */
(function () {
  'use strict';

  /* ── Header hide-on-scroll ────────────────────────────── */
  const header = document.querySelector('.site-header');
  let lastY = 0, ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        header?.classList.toggle('hidden', y > lastY && y > 100);
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ── Mobile nav ───────────────────────────────────────── */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav  = document.getElementById('mobile-nav');
  const navOverlay = document.getElementById('nav-overlay');

  function openNav() {
    mobileNav?.classList.add('open');
    navOverlay?.classList.add('open');
    menuToggle?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mobileNav?.classList.remove('open');
    navOverlay?.classList.remove('open');
    menuToggle?.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuToggle?.addEventListener('click', () => {
    mobileNav?.classList.contains('open') ? closeNav() : openNav();
  });
  navOverlay?.addEventListener('click', closeNav);

  /* ── Cart drawer ──────────────────────────────────────── */
  const cartDrawer  = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartClose   = document.getElementById('cart-close');

  function openCart() {
    cartDrawer?.classList.add('open');
    cartOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    cartDrawer?.classList.remove('open');
    cartOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-cart-trigger]').forEach(el => el.addEventListener('click', openCart));
  cartClose?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  /* ── Accordion ────────────────────────────────────────── */
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── Gallery thumbnails ───────────────────────────────── */
  const mainImg = document.querySelector('.gallery-main-img');
  document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      if (mainImg) mainImg.src = thumb.dataset.src;
      document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  /* ── Size selection ───────────────────────────────────── */
  document.querySelectorAll('.size-btn:not(.sold-out)').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.size-grid')?.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const input = document.querySelector('[name="id"]');
      if (input) input.value = btn.dataset.variantId || '';
    });
  });

  /* ── Filter chips ─────────────────────────────────────── */
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.closest('.filter-group')?.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  /* ── Cart qty controls ────────────────────────────────── */
  document.addEventListener('click', e => {
    if (e.target.matches('.qty-decrease')) {
      const span = e.target.nextElementSibling;
      if (span && parseInt(span.textContent) > 1) span.textContent = parseInt(span.textContent) - 1;
    }
    if (e.target.matches('.qty-increase')) {
      const span = e.target.previousElementSibling;
      if (span) span.textContent = parseInt(span.textContent) + 1;
    }
  });

  /* ── Scroll-in animations ─────────────────────────────── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

})();
