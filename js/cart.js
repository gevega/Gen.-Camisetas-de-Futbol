let produ = document.querySelector('body')
let productos = []
let container = document.querySelector('.cart-items')
let total = document.querySelector('.total')
let totalcart = 0

loadEventList()
function loadEventList() {
    produ.addEventListener('click', addPro)
    container.addEventListener('click', remove)
}

function addPro(e) {
    if (e.target.classList.contains('buy')) {
        const selectPro = e.target.parentElement
        readContent(selectPro)
    }
    cart_logo(productos)
}

function remove(e) {
    if (e.target.classList.contains('remove')) {
        const idProdu = e.target.getAttribute('data-id')

        productos.forEach(value => {
            if (value.id == idProdu) {
                let removePre = parseFloat(value.precio) * parseFloat(value.cantidad)
                totalcart = totalcart - removePre
                totalcart = totalcart.toFixed(0)
            }
        })
        productos = productos.filter(productos => productos.id != idProdu)
    }

    if (productos.length == 0) {
        total.innerHTML = 'Total: $0'
        totalcart=0 
    } 
    loadHTML()
}

function readContent(product) {
    const infoProduct = {
        id: product.querySelector('.buy').getAttribute('data-id'),
        imagen: product.querySelector('.produ').src,
        titulo: product.querySelector('h2').textContent,
        precio: product.querySelector('.precio').textContent,
        cantidad: 1
    }

    totalcart = parseFloat(totalcart) + parseFloat(infoProduct.precio)

    const repeat = productos.some(product => product.id == infoProduct.id)
    if (repeat) {
        const list = productos.map(product => {
            if (product.id == infoProduct.id) {
                product.cantidad++
                return product
            } else {
                return product
            }
        })
        productos = [...list]
    } else {
        productos = [...productos, infoProduct]
    }
    loadHTML()
    //save_localstorage(infoProduct)
}

function loadHTML() {
    clearhtml()
    productos.forEach(product => {
        const { id, imagen, titulo, precio, cantidad } = product;
        const fila = document.createElement('div')
        fila.classList.add('item')
        fila.innerHTML = `
            <div class="logo-item">
                <img src="${imagen}" alt="">
            </div>
            <div class="info-item">
                <h4>${titulo}</h4>
                <h5>Precio: ${precio}</h3>
                <h5>Cantidad: ${cantidad}</h3>
            </div>
            <div class="remove">
                <img src="img/svg/remove.svg" class="remove" data-id="${id}" alt="">
            </div>
            `;
        container.appendChild(fila)
        total.innerHTML = 'Total: $' + totalcart
    })
}

function clearhtml() {
    container.innerHTML = ''
}

function cart_logo(productos){
    let cart = document.querySelector(".cart").parentElement.parentElement
    if(productos.length != 0){
        cart.innerHTML= `
        <a>
            <img src="img/svg/cart-add.svg" alt="Logo" class="cart">
        </a>
        `
    }else{
        cart.innerHTML= `
        <a>
            <img src="img/svg/cart.svg" alt="Logo" class="cart">
        </a>
        `
    }
}




/*function save_localstorage(infoProduct){ 
    localStorage.setItem('Producto '+infoProduct.id, JSON.stringify(infoProduct))
}*/