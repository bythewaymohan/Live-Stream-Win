let currentIndex = 0;

function cloneSlides() {
    const slider = document.getElementById('slider');
    const slides = Array.from(slider.children);

    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });
}

function moveSlider() {
    const slider = document.getElementById('slider');
    const slides = slider.children;
    const totalSlides = slides.length;
    const slidesPerView = window.innerWidth <= 600 ? 2 : window.innerWidth <= 1200 ? 3 : 4;

    currentIndex++;

    if (currentIndex >= totalSlides / 2) {
        slider.style.transition = 'none';
        currentIndex = 0;
        const translateX = -currentIndex * (100 / slidesPerView);
        slider.style.transform = `translateX(${translateX}%)`;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                slider.style.transition = 'transform 0.5s ease';
                moveSlider();
            });
        });
    } else {
        const translateX = -currentIndex * (100 / slidesPerView);
        slider.style.transform = `translateX(${translateX}%)`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cloneSlides();
    setInterval(moveSlider, 4000);
});
