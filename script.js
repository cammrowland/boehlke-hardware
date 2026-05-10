(() => {
  "use strict";

  const SITE_PASSWORD = "mydemo";
  const STORAGE_KEY = "fn-unlocked";

  // ---------- Year ----------
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Password Gate ----------
  const gate = document.getElementById("gate");
  const gateForm = document.getElementById("gate-form");
  const gateInput = document.getElementById("gate-input");

  const unlocked = sessionStorage.getItem(STORAGE_KEY) === "1";

  function lockBody() {
    document.body.classList.add("is-locked");
  }
  function unlockBody() {
    document.body.classList.remove("is-locked");
  }
  function dismissGate() {
    if (!gate) return;
    gate.classList.add("gate--hidden");
    unlockBody();
    window.setTimeout(() => {
      gate.classList.add("gate--gone");
      initRevealsForVisibleSections();
    }, 380);
  }

  if (unlocked) {
    dismissGate();
  } else if (gate) {
    lockBody();
    window.setTimeout(() => {
      if (gateInput) gateInput.focus();
    }, 250);
  }

  if (gateForm && gateInput) {
    gateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = (gateInput.value || "").trim().toLowerCase();
      if (value === SITE_PASSWORD) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        dismissGate();
      } else {
        gateInput.classList.remove("is-error");
        // force reflow so the animation can replay
        void gateInput.offsetWidth;
        gateInput.classList.add("is-error");
        gateInput.value = "";
        gateInput.focus();
      }
    });
  }

  // ---------- Sticky header shadow ----------
  const header = document.getElementById("header");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 16) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Mobile nav ----------
  const navToggle = document.getElementById("nav-toggle");
  const navMobile = document.getElementById("nav-mobile");
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navMobile.classList.toggle("is-open", !expanded);
    });
    navMobile.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navMobile.classList.remove("is-open");
      });
    });
  }

  // ---------- Scroll reveals ----------
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const delay = el.getAttribute("data-reveal-delay");
    if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  let observer;
  function initRevealsForVisibleSections() {
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-in"));
      return;
    }
    if (observer) return;
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  }
  // Always init reveals so hero animates even before gate dismissed
  initRevealsForVisibleSections();

  // ---------- Smooth-scroll offset for sticky header ----------
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 1;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
})();
