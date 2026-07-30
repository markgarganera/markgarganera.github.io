/*==================================================
    Mark Garganera Portfolio
    Main JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        ELEMENTS
    =========================================*/

    const body = document.body;

    const sidebar = document.querySelector(".sidebar");

    const menuBtn = document.querySelector(".menu-btn");

    const navLinks = document.querySelectorAll(".sidebar nav a");

    const sections = document.querySelectorAll("section");

    const backToTop = document.getElementById("backToTop");

    const skillBars = document.querySelectorAll(".progress div");

    const animatedElements = document.querySelectorAll(
        ".card, .timeline-item, .portfolio-item, .fade-up, .fade-left, .fade-right, .zoom-in"
    );

    /*=========================================
        MOBILE MENU
    =========================================*/

    if (menuBtn && sidebar) {

        menuBtn.addEventListener("click", () => {

            sidebar.classList.toggle("active");

            menuBtn.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.toggle("fa-bars");

                icon.classList.toggle("fa-xmark");

            }

        });

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                sidebar.classList.remove("active");

                menuBtn.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });

    }

    /*=========================================
        SMOOTH SCROLL
    =========================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            const offset = 40;

            window.scrollTo({

                top: target.offsetTop - offset,

                behavior: "smooth"

            });

        });

    });

    /*=========================================
        ACTIVE NAVIGATION
    =========================================*/

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const top = window.scrollY;

            const offset = section.offsetTop - 180;

            const height = section.offsetHeight;

            if (top >= offset && top < offset + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();

    /*=========================================
        INTERSECTION OBSERVER
    =========================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.20

    });

    animatedElements.forEach(el => {

        observer.observe(el);

    });

    /*=========================================
        SKILL BAR ANIMATION
    =========================================*/

    const skillObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const bar = entry.target;

            const width = bar.style.width;

            bar.style.width = "0";

            requestAnimationFrame(() => {

                bar.style.transition = "width 1.8s ease";

                bar.style.width = width;

            });

            skillObserver.unobserve(bar);

        });

    }, {

        threshold: 0.6

    });

    skillBars.forEach(bar => {

        skillObserver.observe(bar);

    });

    /*=========================================
        BACK TO TOP BUTTON
    =========================================*/

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*=========================================
        HERO TYPING EFFECT
    =========================================*/

    const typing = document.querySelector(".typing-text");

    if (typing) {

        const words = [

            "Website Developer",

            "Frontend Developer",

            "UI Designer",

            "WordPress Expert",

            "Webflow Developer",

            "Problem Solver"

        ];

        let wordIndex = 0;

        let charIndex = 0;

        let deleting = false;

        function type() {

            const current = words[wordIndex];

            if (!deleting) {

                typing.textContent = current.substring(0, charIndex++);

                if (charIndex > current.length) {

                    deleting = true;

                    setTimeout(type, 1500);

                    return;

                }

            } else {

                typing.textContent = current.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex = (wordIndex + 1) % words.length;

                }

            }

            setTimeout(type, deleting ? 45 : 90);

        }

        type();

    }

    /*=========================================
        HEADER PARALLAX
    =========================================*/

    const heroImage = document.querySelector(".hero-image");

    window.addEventListener("scroll", () => {

        if (!heroImage) return;

        const y = window.scrollY * 0.08;

        heroImage.style.transform = `translateY(${y}px)`;

    });

    /*=========================================
        FADE PAGE IN
    =========================================*/

    body.style.opacity = "0";

    window.addEventListener("load", () => {

        body.style.transition = "opacity .6s ease";

        body.style.opacity = "1";

    });

});

/*=========================================
    ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.dataset.target, 10);

        let current = 0;

        const duration = 1800;

        const stepTime = 16;

        const increment = Math.max(1, Math.ceil(target / (duration / stepTime)));

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent = current;

            requestAnimationFrame(updateCounter);

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*=========================================
    Animated Skill Progress Bar
=========================================*/

const skillsSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");
const percentages = document.querySelectorAll(".skill-percent");

let skillsAnimated = false;

const animateSkills = () => {

    if (skillsAnimated) return;

    const top = skillsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        skillsAnimated = true;

        progressBars.forEach(bar => {

            const target = parseInt(bar.dataset.width);

            bar.style.width = target + "%";

        });

        percentages.forEach(counter => {

            const target = parseInt(counter.dataset.percent);

            let current = 0;

            const timer = setInterval(() => {

                current++;

                counter.textContent = current + "%";

                if (current >= target) {

                    clearInterval(timer);

                }

            }, 1800 / target);

        });

    }

};

window.addEventListener("scroll", animateSkills);
animateSkills();
