// ============================================================
// RoboFuture Kids — script.js
// ============================================================

// Single source of truth for the purchase link.
// Every purchase CTA in index.html already points here directly,
// but this constant is kept so any future dynamic buttons stay in sync.
const PAYMENT_LINK = "https://superprofile.bio/vp/robofuture-kids-ai-robotics-guide";

document.addEventListener("DOMContentLoaded", () => {

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- FAQ accordion ----------
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Close all other FAQ items
      faqButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.setAttribute("aria-expanded", "false");
          const otherAnswer = otherButton.nextElementSibling;
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle the clicked item
      button.setAttribute("aria-expanded", String(!isOpen));
      if (answer) {
        answer.style.maxHeight = isOpen ? null : `${answer.scrollHeight}px`;
      }
    });
  });

  // ---------- Fallback for missing product images ----------
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.style.background = "#171E4A";
      img.alt = `${img.alt || "Product image"} (image unavailable)`;
    }, { once: true });
  });

});
