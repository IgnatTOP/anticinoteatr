const boxes = document.querySelectorAll('.animate');

function isElementFullyOutOfViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= window.innerHeight ||
        rect.bottom <= 100
    );
}

function animateOnScroll() {
    boxes.forEach((box) => {
        if (!isElementFullyOutOfViewport(box)) {
            box.style.opacity = 1;
            box.style.transform = 'translateY(0)';
        } else {
            box.style.opacity = 0;
            box.style.transform = 'translateY(20px)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);



