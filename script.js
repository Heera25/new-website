document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const sliderItems = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');
    const itemWidth = sliderItems[0].offsetWidth;
    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            currentIndex = parseInt(this.dataset.slide);
            updateSliderPosition();
        });
    });

    window.addEventListener('resize', function () {
        updateSliderPosition();
    });

    const projectItems = document.querySelectorAll('.project-item');
    const projectImage = document.getElementById('project-image');

    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const imageUrl = item.getAttribute('data-image');
            projectImage.src = imageUrl;
        });
    });
});

