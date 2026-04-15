const cursorGlow = document.querySelector(".cursor-glow");
const revealItems = document.querySelectorAll(".reveal");
const copyEmailButton = document.querySelector("[data-copy-email]");
const footerYear = document.querySelector("#footer-year");

if (cursorGlow) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.transform = `translate(${event.clientX - 304}px, ${event.clientY - 304}px)`;
  });
}

if (revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", async () => {
    const email = "pei2004shreyas@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      copyEmailButton.textContent = "Email Copied";
    } catch (error) {
      copyEmailButton.textContent = email;
    }

    window.setTimeout(() => {
      copyEmailButton.textContent = "Copy Email";
    }, 1800);
  });
}

if (footerYear) {
  footerYear.textContent = `Updated ${new Date().getFullYear()}`;
}
