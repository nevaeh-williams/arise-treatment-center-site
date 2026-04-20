(function () {
  "use strict";

  // ── Mobile nav ──────────────────────────────────────────
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.getElementById("mobile-nav");
  if (toggle && drawer) {
    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      drawer.setAttribute("aria-hidden", String(!open));
    }

    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    drawer.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // ── Scroll animations ───────────────────────────────────
  if (!window.IntersectionObserver) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(
    ".pillar, .card, .split__media, .split__body, " +
    ".trust-item, .section-heading, .cta-inline, " +
    ".insurance__list, .testimonial blockquote, " +
    ".cta-band > .container, .commit, .prep-item, .timeline__step"
  ).forEach(function (el) {
    el.classList.add("fade-up");
    observer.observe(el);
  });
})();
