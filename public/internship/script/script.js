function openMentor(file, name) {
    document.getElementById('mentor-iframe').src = file;
    document.getElementById('mentor-label').textContent = name || 'Mentor Profile';
    document.getElementById('mentor-frame-section').classList.add('active');
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('mentorDropdown').classList.remove('open');
}
function closeMentor() {
    document.getElementById('mentor-frame-section').classList.remove('active');
    document.getElementById('main-content').style.display = '';
    document.getElementById('mentor-iframe').src = '';
}
function toggleDropdown() {
    const dropdown = document.getElementById('mentorDropdown');
    if (dropdown) dropdown.classList.toggle('open');
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark-mode', isDark);

    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.innerHTML = isDark
            ? '<i class="fas fa-sun w-4"></i> Light Mode'
            : '<i class="fas fa-moon w-4"></i> Dark Mode';
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('internship-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('internship-theme', nextTheme);
    applyTheme(nextTheme);

    const mentorFrame = document.getElementById('mentor-iframe');
    if (mentorFrame && mentorFrame.contentWindow) {
        mentorFrame.contentWindow.postMessage({ type: 'internship-theme', theme: nextTheme }, window.location.origin);
    }
}

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    if (!carousel || !carousel.children.length) return;
    const count = carousel.children.length;
    index = (index + count) % count;
    carousel.dataset.index = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide(carouselId) {
    const c = document.getElementById(carouselId);
    if (!c) return;
    showSlide(carouselId, parseInt(c.dataset.index || 0) + 1);
}
function prevSlide(carouselId) {
    const c = document.getElementById(carouselId);
    if (!c) return;
    showSlide(carouselId, parseInt(c.dataset.index || 0) - 1);
}

document.addEventListener('DOMContentLoaded', function () {
    applyTheme(localStorage.getItem('internship-theme') || 'light');

    const dropdown = document.getElementById('mentorDropdown');

    document.addEventListener('click', function (e) {
        if (dropdown && !dropdown.contains(e.target)) dropdown.classList.remove('open');
    });

    setInterval(() => nextSlide('carousel1'), 5000);
    setInterval(() => nextSlide('carousel2'), 5000);

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
                    });
                }
            });
        }, { threshold: 0.4 });

        sections.forEach(s => observer.observe(s));
    }
});

window.addEventListener('message', function (event) {
    if (event.origin !== window.location.origin) return;
    if (event.data && event.data.type === 'internship-theme') {
        localStorage.setItem('internship-theme', event.data.theme);
        applyTheme(event.data.theme);
    }
});
