// Intro loader animation
const intro = document.getElementById("intro");
const introProgress = document.getElementById("introProgress");

let p = 0;
const timer = setInterval(() => {
  p += Math.floor(Math.random() * 10) + 8; // 8-17
  if (p >= 100) p = 100;
  introProgress.style.width = p + "%";

  if (p === 100) {
    clearInterval(timer);
    setTimeout(() => intro.classList.add("hidden"), 350);
  }
}, 220);

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger?.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Close mobile menu on click
mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("show"));
});

// Scroll reveal animations (IntersectionObserver)
const els = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute("data-delay");
        if (delay) {
          entry.target.style.transitionDelay = `${delay}ms`;
        }
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

els.forEach(el => observer.observe(el));

// Fake send button (front-end only)
document.getElementById("sendBtn")?.addEventListener("click", () => {
  const form = document.querySelector(".form");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  alert("Enquiry noted! (This demo form is not connected yet.)\nTell me your WhatsApp number to connect it.");
});

