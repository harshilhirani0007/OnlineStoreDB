// Responsive Navbar Toggle
const navToggle = document.createElement('div');
navToggle.innerHTML = '<span></span><span></span><span></span>';
navToggle.classList.add('nav-toggle');
document.querySelector('.navbar .container').appendChild(navToggle);

const navMenu = document.querySelector('.navbar nav ul');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Smooth Scrolling
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Scroll to Top Button
const scrollTopBtn = document.createElement('div');
scrollTopBtn.innerHTML = '⬆';
scrollTopBtn.classList.add('scroll-top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Responsive Navigation Menu
const menuToggle = document.getElementById('menu-toggle');
const navLink = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

