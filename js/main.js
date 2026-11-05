(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");
  var navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  var sections = document.querySelectorAll("main section[id]");

  function closeMobileNav() {
    if (siteNav) siteNav.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMobileNav();
    });
  });

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMobileNav();
  });
})();
