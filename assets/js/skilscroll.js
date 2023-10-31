function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateDelivery() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        if (isElementInViewport(item) && !item.classList.contains('in-view')) {
            item.classList.add('in-view');
        }
    });
}

function startProgressAnimation() {
    const skillItems = document.querySelectorAll('.skill-item.in-view');

    skillItems.forEach(item => {
        const progressBars = item.querySelectorAll('.progress-bar span');
        progressBars.forEach(bar => {
            bar.style.width = bar.dataset.percent;
        });
    });
}

document.addEventListener('scroll', animateDelivery);
document.addEventListener('DOMContentLoaded', () => {
    animateDelivery(); 
    startProgressAnimation();
});
