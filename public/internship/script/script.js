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
