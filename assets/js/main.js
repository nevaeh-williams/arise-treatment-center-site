(function () {
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.getElementById("mobile-nav");
  if (!toggle || !drawer) return;

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
})();
