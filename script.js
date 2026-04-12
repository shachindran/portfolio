/* =============================================
   PORTFOLIO V2 — script.js
   All features: theme, loader, cursor, particles,
   scroll reveal, tilt, typing, nav, back-to-top,
   timeline, view-more, cursor hint.
   ============================================= */

// ── 1. THEME TOGGLE ──────────────────────────
const html         = document.documentElement;
const themeToggle  = document.getElementById('theme-toggle');

// Theme is already set in <head> from localStorage — just wire the button
themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    // Update particle color immediately
    if (window._particlesNeedUpdate) window._particlesNeedUpdate();
});

// ── 2. PAGE LOADER ──────────────────────────
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('hidden');
    }, 1500);
});

// ── 3. SCROLL PROGRESS BAR ──────────────────
const progressBar = document.getElementById('page-progress');
function updateProgress() {
    const scrolled  = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    progressBar.style.width = ((scrolled / maxScroll) * 100) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

// ── 4. NAVBAR SCROLLED STATE ────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── 5. BACK TO TOP ──────────────────────────
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 420);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── 6. CUSTOM CURSOR ────────────────────────
(function () {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = -200, mouseY = -200;
    let ringX  = -200, ringY  = -200;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top  = mouseY + 'px';
    });

    (function loopRing() {
        ringX += (mouseX - ringX) * 0.11;
        ringY += (mouseY - ringY) * 0.11;
        ring.style.left = ringX + 'px';
        ring.style.top  = ringY + 'px';
        requestAnimationFrame(loopRing);
    })();

    const hoverEls = document.querySelectorAll('a, button, .flip-card, .project-thumb, .collage-img, .stat-card, .archive-item');
    hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => { dot.classList.add('expanded'); ring.classList.add('expanded'); });
        el.addEventListener('mouseleave', () => { dot.classList.remove('expanded'); ring.classList.remove('expanded'); });
    });
})();

// ── 7. TYPING EFFECT ────────────────────────
(function () {
    const el      = document.getElementById('typing-text');
    const phrases = ['Digital Innovator', 'IT Student', 'Tech Enthusiast', 'Full-Stack Developer', 'UI/UX Designer', 'Problem Solver'];
    let pi = 0, ci = 0, deleting = false;

    function type() {
        if (!el) return;
        const phrase = phrases[pi];
        el.textContent = phrase.substring(0, deleting ? ci - 1 : ci + 1);
        deleting ? ci-- : ci++;

        if (!deleting && ci === phrase.length) {
            deleting = true; setTimeout(type, 1800); return;
        }
        if (deleting && ci === 0) {
            deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 450); return;
        }
        setTimeout(type, deleting ? 42 : 88);
    }
    document.addEventListener('DOMContentLoaded', type);
})();

// ── 8. SCROLL REVEAL ────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el));

// ── 9. NAVIGATION ACTIVE STATE ──────────────
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            const id   = entry.target.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);
            if (link) link.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('section, footer').forEach(el => navObserver.observe(el));

// ── 10. PARTICLE SYSTEM (HERO) ──────────────
(function () {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let raf;

    function resize() {
        canvas.width  = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    window.addEventListener('resize', resize, { passive: true });
    resize();

    class Particle {
        constructor() { this.init(); }
        init() {
            this.x  = Math.random() * canvas.width;
            this.y  = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.45;
            this.vy = (Math.random() - 0.5) * 0.45;
            this.r  = Math.random() * 2 + 0.4;
            this.a  = Math.random() * 0.45 + 0.1;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.init();
        }
        draw(dark) {
            const alpha = dark ? this.a : this.a * 0.55;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,77,0,${alpha})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    function animate() {
        if (!document.getElementById('home')) return;
        const dark = html.getAttribute('data-theme') === 'dark';
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx   = particles[i].x - particles[j].x;
                const dy   = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 110) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255,77,0,${(1 - dist / 110) * (dark ? 0.18 : 0.07)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        particles.forEach(p => { p.update(); p.draw(dark); });
        raf = requestAnimationFrame(animate);
    }

    // Only run when hero is visible
    const heroObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { animate(); }
        else { cancelAnimationFrame(raf); }
    }, { threshold: 0 });

    const hero = document.getElementById('home');
    if (hero) heroObs.observe(hero);

    // Expose update trigger for theme changes
    window._particlesNeedUpdate = () => {};
})();

// ── 11. 3D TILT ON PROJECT CARDS ────────────
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x    = e.clientX - rect.left;
        const y    = e.clientY - rect.top;
        const cx   = rect.width  / 2;
        const cy   = rect.height / 2;
        const rotX = ((y - cy) / cy) * -7;
        const rotY = ((x - cx) / cx) *  7;
        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(0.975)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
        card.style.transition = 'transform .5s ease';
    });
    card.addEventListener('mouseenter', () => { card.style.transition = 'none'; });
});

// ── 12. VIEW MORE PROJECTS ──────────────────
document.addEventListener('DOMContentLoaded', () => {
    const btn     = document.getElementById('view-more-btn');
    const content = document.getElementById('archive-content');
    if (!btn || !content) return;

    content.style.display = 'none';

    btn.addEventListener('click', () => {
        const hidden = content.style.display === 'none';
        if (hidden) {
            content.style.display = 'block';
            setTimeout(() => content.classList.add('show'), 10);
            btn.textContent = 'Show Less ↑';
        } else {
            content.classList.remove('show');
            setTimeout(() => { content.style.display = 'none'; }, 480);
            btn.textContent = 'View More Projects ↓';
        }
    });
});

// ── 13. CURSOR TAP HINT (original feature) ──
document.addEventListener('DOMContentLoaded', () => {
    const hint = document.getElementById('cursor-tap-hint');
    if (!hint) return;

    function moveTo(e) {
        hint.style.top  = (e.clientY + 18) + 'px';
        hint.style.left = (e.clientX + 18) + 'px';
    }

    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('mouseenter', () => { hint.textContent = 'TAP TO FLIP'; hint.style.opacity = '1'; });
        card.addEventListener('mouseleave', () => { hint.style.opacity = '0'; });
        card.addEventListener('mousemove', moveTo);
    });

    document.querySelectorAll('.hover-target').forEach(link => {
        link.addEventListener('mouseenter', (e) => { hint.textContent = e.target.dataset.cursor; hint.style.opacity = '1'; });
        link.addEventListener('mouseleave', () => { hint.style.opacity = '0'; });
        link.addEventListener('mousemove', moveTo);
    });
});

// ── 14. TIMELINE ANIMATED DOTS ──────────────
(function () {
    const dots = document.querySelectorAll('.timeline-dot');
    const dotObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.boxShadow = '0 0 0 6px rgba(255,77,0,0.1), 0 0 22px rgba(255,77,0,0.4)';
                entry.target.style.transform = 'scale(1.15)';
                setTimeout(() => {
                    entry.target.style.transform = '';
                    entry.target.style.boxShadow = '';
                }, 800);
                dotObs.unobserve(entry.target);
            }
        });
    }, { threshold: 1.0 });
    dots.forEach(d => {
        d.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
        dotObs.observe(d);
    });
})();

// =============================================
// ADDITIONAL FEATURES � appended to script.js
// =============================================

// -- 15. GLITCH TEXT SETUP -------------------
// Add data-text attribute for CSS glitch effect
document.addEventListener('DOMContentLoaded', () => {
    const nameSpan = document.querySelector('.main-title span');
    if (nameSpan) nameSpan.setAttribute('data-text', nameSpan.textContent);
});

// -- 16. HERO MOUSE PARALLAX -----------------
(function () {
    const heroContent = document.querySelector('.hero-content');
    const hero = document.getElementById('home');
    if (!heroContent || !hero) return;

    let ticking = false;
    document.addEventListener('mousemove', (e) => {
        if (!hero.matches(':hover')) return;
        if (!ticking) {
            requestAnimationFrame(() => {
                const cx = window.innerWidth  / 2;
                const cy = window.innerHeight / 2;
                const dx = (e.clientX - cx) / cx;
                const dy = (e.clientY - cy) / cy;
                heroContent.style.transform = `translate(${dx * -10}px, ${dy * -10}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
    hero.addEventListener('mouseleave', () => {
        heroContent.style.transition = 'transform 0.8s ease';
        heroContent.style.transform  = 'translate(0, 0)';
        setTimeout(() => { heroContent.style.transition = ''; }, 800);
    });
})();

// -- 17. PROJECT CARD CURSOR SPOTLIGHT -------
document.querySelectorAll('.project-thumb').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width)  * 100;
        const y = ((e.clientY - rect.top)  / rect.height) * 100;
        card.style.setProperty('--mx', x + '%');
        card.style.setProperty('--my', y + '%');
    });
});

// -- 18. MAGNETIC BUTTON EFFECT --------------
document.querySelectorAll('.btn-resume').forEach(btn => {
    let rect, isOver = false;

    btn.addEventListener('mouseenter', () => {
        rect = btn.getBoundingClientRect();
        isOver = true;
        btn.style.transition = 'color .3s, border-color .3s, box-shadow .3s';
    });
    btn.addEventListener('mousemove', (e) => {
        if (!isOver) return;
        const x = e.clientX - rect.left - rect.width  / 2;
        const y = e.clientY - rect.top  - rect.height / 2;
        btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        isOver = false;
        btn.style.transition = 'all .5s cubic-bezier(.25,.46,.45,.94)';
        btn.style.transform  = '';
    });
});

// -- 19. ANIMATED COUNTER --------------------
function animateCounter(el, target, duration) {
    let start = null;
    function step(ts) {
        if (!start) start = ts;
        const pct = Math.min((ts - start) / duration, 1);
        el.textContent = Math.floor(pct * target);
        if (pct < 1) requestAnimationFrame(step);
        else el.textContent = target;
    }
    requestAnimationFrame(step);
}

const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el     = entry.target;
            const target = parseInt(el.dataset.count);
            animateCounter(el, target, 1600);
            counterObs.unobserve(el);
        }
    });
}, { threshold: 0.8 });

document.querySelectorAll('.counter-num[data-count]').forEach(el => counterObs.observe(el));

// -- 20. SVG ICON STAGGER ANIMATION ----------
// Make each icon start its float animation with a staggered delay
document.querySelectorAll('.project-icon').forEach((icon, i) => {
    icon.style.animationDelay = (i * 0.8) + 's';
});

// -- 21. TECH TAG ENTRANCE ANIMATION ---------
// Animate tech tags when their parent project card reveals
const tagObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const tags = entry.target.querySelectorAll('.tech-tag');
            tags.forEach((tag, i) => {
                tag.style.opacity = '0';
                tag.style.transform = 'translateY(8px)';
                setTimeout(() => {
                    tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                    tag.style.opacity    = '1';
                    tag.style.transform  = 'translateY(0)';
                }, 400 + i * 60);
            });
            tagObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.project-card').forEach(card => tagObs.observe(card));

// -- 22. FLIP CARD: HOVER GLOW ---------------
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
            const front = card.querySelector('.flip-card-front');
            if (front) front.style.boxShadow = '0 0 30px rgba(255,77,0,0.12)';
        }
    });
    card.addEventListener('mouseleave', () => {
        const front = card.querySelector('.flip-card-front');
        if (front) front.style.boxShadow = '';
    });
});

// -- 23. SMOOTH SECTION HIGHLIGHT ON NAV CLICK -
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').slice(1);
        const target   = document.getElementById(targetId);
        if (!target) return;
        // Brief flash highlight on the section
        target.style.transition = 'outline 0s';
        target.style.outline    = '2px solid rgba(255,77,0,0.25)';
        setTimeout(() => {
            target.style.transition = 'outline 0.8s ease';
            target.style.outline    = '2px solid transparent';
            setTimeout(() => { target.style.outline = ''; }, 900);
        }, 50);
    });
});
