let cart = document.querySelector('nav')
let colapse = document.getElementById('colapse-cart')
let menu = document.getElementById('items')
let items = document.querySelector('.menu-col')

loadEventLis()
function loadEventLis() {
    cart.addEventListener('click', show_cart)
}

function show_cart(e) {
    if (e.target.classList.contains('cart')) {
        colapse.classList.toggle('active-cart')
        items.classList.remove('active-menu')
    }

    if (e.target.classList.contains('svg-icon')) {
        items.classList.toggle('active-menu')
        colapse.classList.remove('active-cart')
    }
}