console.log("JS is working...");

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     IMAGE MODAL
  ========================== */
  const items = document.querySelectorAll(".portfolio-item");
  const modal = document.querySelector(".image-modal");
  const modalImg = document.querySelector(".image-modal-img");
  const closeBtn = document.querySelector(".image-close");

  if (items.length && modal && modalImg && closeBtn) {
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target.tagName === "A") return;

        const img = item.querySelector("img");
        if (!img) return;

        modal.classList.add("active");
        modalImg.src = img.src;
      });
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  /* =========================
     NAV SCROLL
  ========================== */
  const navBar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (!navBar) return;

    if (window.scrollY > 50) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  });

  /* =========================
     MOBILE MENU (SAFE)
  ========================== */
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".hero-nav");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      toggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
    });
  }

  /* =========================
     FADE-IN
  ========================== */
  const faders = document.querySelectorAll(".fade-in");

  if (faders.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    faders.forEach((el) => observer.observe(el));
  }

  /* =========================
     CONTACT FORM
  ========================== */
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully!");
    });
  }

  /* =========================
     COUNTER (FIXED ✅)
  ========================== */
  const counters = document.querySelectorAll(".count");

  if (counters.length > 0) {
    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      let current = 0;

      const update = () => {
        current += target / 60;

        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(update);
        } else {
          counter.textContent = target + "+";
        }
      };

      update();
    });
  }

});