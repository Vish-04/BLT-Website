
// Slide in animation for nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const pageId = link.getAttribute('href');
    const page = document.querySelector(pageId);
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    page.style.display = 'block';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get all the navigation links
  const navLinks = document.querySelectorAll("nav a");

  // Add a click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      // Get the target element's id from the link's href
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Calculate the distance from the top of the page to the target element
      const topDistance = targetElement.offsetTop;

      // Use window.scrollTo() to smoothly scroll to the target element
      window.scrollTo({
        top: topDistance,
        behavior: "smooth"
      });
    });
  });
});


// Fade in animation for buttons
const buttons = document.querySelectorAll('a');

buttons.forEach(button => {
  button.addEventListener('mouseenter', e => {
    button.style.opacity = '0.8';
  });
  button.addEventListener('mouseleave', e => {
    button.style.opacity = '1';
  });
});

// Shadow effect on hover for team cards
const teamCards = document.querySelectorAll('.team-cards .card');

teamCards.forEach(card => {
card.addEventListener('mouseenter', e => {
card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
});
card.addEventListener('mouseleave', e => {
card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
});
});

// Shadow effect on hover for sponsor cards
const sponsorCards = document.querySelectorAll('.sponsor-cards .card');

sponsorCards.forEach(card => {
card.addEventListener('mouseenter', e => {
card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
});
card.addEventListener('mouseleave', e => {
card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
});
});

// Show the home page by default
document.getElementById("home").style.display = "block";

// Hide the other pages
document.getElementById("compete").style.display = "none";
document.getElementById("staff").style.display = "none";
document.getElementById("faq").style.display = "none";
document.getElementById("our-team").style.display = "none";
document.getElementById("sponsors").style.display = "none";
document.getElementById("contact-us").style.display = "none";

