// Intro (simple, quick)
const intro = document.getElementById("intro");
setTimeout(() => intro?.classList.add("hidden"), 1100);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger?.addEventListener("click", () => mobileMenu.classList.toggle("show"));
mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileMenu.classList.remove("show"));
});

// Scroll reveal (subtle)
const els = document.querySelectorAll("[data-animate]");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const delay = e.target.getAttribute("data-delay");
      if (delay) e.target.style.transitionDelay = `${delay}ms`;
      e.target.classList.add("in-view");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

els.forEach(el => io.observe(el));

// WhatsApp form sender
const sendBtn = document.getElementById("sendWA");
sendBtn?.addEventListener("click", () => {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const msg = document.getElementById("msg");

  const form = document.querySelector(".form");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const text =
`Hello Yashraj Hostel Bhigwan,
Name: ${name.value}
Phone: ${phone.value}
Message: ${msg.value}

College: Dattakala College of Pharmacy
Fees: ₹4200/month`;

  const url = `https://wa.me/918605463560?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
