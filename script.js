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
        if (delay) entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
els.forEach(el => observer.observe(el));

/* ========== WhatsApp Enquiry (YOUR NUMBER) ========== */
const WHATSAPP_NUMBER = "918605463560"; // +91 86054 63560

document.getElementById("enquiryForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = document.getElementById("enquiryForm");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const name = document.getElementById("enqName").value.trim();
  const phone = document.getElementById("enqPhone").value.trim();
  const message = document.getElementById("enqMsg").value.trim();

  // This includes ALL important hostel information automatically
  const text =
`Hello Yashraj Hostel Bhigwan,
I want to enquire.

Name: ${name}
Phone: ${phone}
Message: ${message}

Hostel Details:
- Sleeping facility: Good beds
- Bathrooms & toilets: Available
- Food: 2-time meals daily
- Non-veg: Included 2 times a week
- Distance: About 500m close to college`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

