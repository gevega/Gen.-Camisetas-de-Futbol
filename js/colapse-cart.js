let cart = document.querySelector('nav')
let colapse = document.getElementById('colapse-cart')
let menu = document.getElementById('items')
let vw = document.documentElement.clientWidth
let vh = document.documentElement.clientHeight

loadEventLis()
function loadEventLis() {
    cart.addEventListener('click', show_cart)
}

function show_cart(e) {
    if (e.target.classList.contains('cart')) {
        if (colapse.style.display == "flex") {
            colapse.style.display = 'none'
            console.log('Ocultar')
        } else {
            colapse.style.display = 'flex'
            if (vw <= 640) {
                menu.style.display = 'none'
            } else { menu.style.display = 'flex' }
            console.log('Mostrar')
        }
    }

    if (e.target.classList.contains('svg-icon')) {
        if (menu.style.display == "flex") {
            menu.style.display = 'none'
            console.log('Ocultar')
        } else {
            menu.style.display = 'flex'
            colapse.style.display = 'none'
            console.log('Mostrar')
        }
    }
}

/*function normalizeHTML() {
    vw = document.documentElement.clientWidth
    vh = document.documentElement.clientHeight
    if (vw >= 640 || vh >= 1140) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}*/