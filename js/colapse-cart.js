
let cart = document.querySelector('nav')

loadEventLis()
function loadEventLis() {
    cart.addEventListener('click', text)
}

function text(e) {
    if (e.target.classList.contains('cart')) {
        const selectPro = e.target.parentElement
        console.log('Hola paps')
    }
}