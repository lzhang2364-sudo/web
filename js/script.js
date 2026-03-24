// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Navigation link highlighting
const navLinks = document.querySelectorAll('.nav-link');

function highlightLink() {
    navLinks.forEach(link => {
        link.classList.remove('active');
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightLink);

// Smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Newsletter form submission handling
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Handle the submission logic here, e.g., send email to server
    console.log(`Newsletter subscription request for: ${email}`);
    emailInput.value = ''; // Clear the form
});
