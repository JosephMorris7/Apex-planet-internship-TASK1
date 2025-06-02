function scrollToServices() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showContact() {
  const contactSection = document.getElementById("contact");

  if (contactSection.style.display === "none" || contactSection.style.display === "") {
    contactSection.style.display = "block";

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

// Added for Task 1 requirement:
function signIn() {
  alert("You are signed in");
}

function register() {
  alert("You are registered");
}
