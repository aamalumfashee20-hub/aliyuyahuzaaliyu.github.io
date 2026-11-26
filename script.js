
// ALIYU YAHUZA ALIYU - PORTFOLIO

// Welcome message
console.log("Welcome to Aliyu Yahuza Aliyu's Portfolio!");

// Footer year automatically updates
const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `
        <p>© ${year} Aliyu Yahuza Aliyu. All Rights Reserved.</p>
        <p>Build • Analyse • Innovate</p>
    `;
}

// Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation:", this.textContent);
    });
});

// Project interaction
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.style.transition = '0.3s ease';
    });
});
