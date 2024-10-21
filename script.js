let lastScrollTop = 0; 
let sectionFirst = document.querySelector('.first');

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;

    // Detect scrolling up
    if (scrollTop < lastScrollTop) {
        // When scrolling up
        sectionFirst.classList.remove('bg-image-2');
        sectionFirst.classList.add('bg-image-1');
    } else {
        // When scrolling down
        sectionFirst.classList.remove('bg-image-1');
        sectionFirst.classList.add('bg-image-2');
    }

    lastScrollTop = scrollTop;
});

document.addEventListener('scroll', () => {
    const meetText = document.querySelector('.meet-text');
    const meetHeading = document.querySelector('.meet-heading');
    const rect = meetText.getBoundingClientRect();

   
    if (rect.top <= window.innerHeight / 2) {
        meetText.classList.add('hidden');
        meetHeading.classList.add('show');
    } else {
        meetText.classList.remove('hidden');
        meetHeading.classList.remove('show');
    }
});

function initializeSlider(sliderElement) {
    let slider = sliderElement.querySelector('.list');
    let items = sliderElement.querySelectorAll('.list .item');
    let next = sliderElement.querySelector('#next');
    let prev = sliderElement.querySelector('#prev');
    let dots = sliderElement.querySelectorAll('.dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    next.onclick = function() {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }

    prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }

    let refreshInterval = setInterval(() => { next.click() }, 3000);

    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';

        let last_active_dot = sliderElement.querySelector('.dots li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => { next.click() }, 3000);
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        })
    })

    window.onresize = function(event) {
        reloadSlider();
    };
}


initializeSlider(document.querySelector('.sixth .slider'));
initializeSlider(document.querySelector('.eighth .slider-2'));

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};