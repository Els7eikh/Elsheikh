document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // 2. Custom Cursor Aura Effect
    const cursorAura = document.querySelector('.cursor-aura');
    document.addEventListener('mousemove', (e) => {
        cursorAura.style.left = e.clientX + 'px';
        cursorAura.style.top = e.clientY + 'px';
    });

    // 3. Initialize Vanilla Tilt.js for 3D card effect
    VanillaTilt.init(document.querySelectorAll(".cert-item, .soft-skill-item, .project-item"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
    });

    // 4. Initialize Particles.js for hero background
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
            "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });

    // 5. Back to Top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 6. Initialize Typed.js for the hero section job title
    new Typed('#job-title', {
        strings: ['  Junior Network Security Engineer  ', ' ', ' ALP-24\'Alumni ', '   FCIS Student '],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });
});