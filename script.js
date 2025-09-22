function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
  }

  // Close menu when clicking on a link
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector("nav ul").classList.remove("show");
    });
  });