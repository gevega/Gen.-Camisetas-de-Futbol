let cart = document.querySelector('nav')
let colapse = document.getElementById('colapse-cart')
let menu = document.getElementById('items')
let vw = document.documentElement.clientWidth

loadEventLis()
function loadEventLis() {
    cart.addEventListener('click', show_cart)
    window.addEventListener('resize', normalizeNav)
}

function show_cart(e) {
    vw = document.documentElement.clientWidth

    if (e.target.classList.contains('cart')) {
        if (colapse.style.display == "flex") {
            colapse.style.display = 'none'
        } else {
            if(vw<=1140){
                colapse.style.display = 'flex'
                menu.style.display = 'none'
            } else {
                colapse.style.display = 'flex'
                menu.style.display = 'flex'
            }
            
        }
    }

    if (e.target.classList.contains('svg-icon')) {
        if (menu.style.display == "flex") {
            menu.style.display = 'none'
        } else {
            menu.style.display = 'flex'
            colapse.style.display = 'none'
        }
    }
}

function normalizeNav() {
    vw = document.documentElement.clientWidth
    if (vw > 1140) {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}