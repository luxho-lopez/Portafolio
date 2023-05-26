const item = document.querySelector('.menu-item-link');

item.addEventListener('click', function(event) {
    // event.preventDefault();
    item.classList.add('active');
});