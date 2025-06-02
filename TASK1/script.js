function scrollToServices() {
  document.getElementById("services").scrollIntoView({ behavior: 'smooth' });
}

function showContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection.style.display === "none" || contactSection.style.display === "") {
    contactSection.style.display = "block";
    contactSection.classList.add("show");
    setTimeout(() => {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}

function highlightService(element) {
  document.querySelectorAll(".service").forEach(service => {
    service.classList.remove("active");
  });
  element.classList.add("active");
}

function signIn() {
  alert("You are signed in");
}

function register() {
  alert("You are registered");
}

// Intersection Observer for subheading animation
document.addEventListener("DOMContentLoaded", () => {
  const subheading = document.querySelector("#services .subheading");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(subheading);
});