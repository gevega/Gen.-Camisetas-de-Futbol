let produ = document.querySelector('body')
let productos = []

loadEventList()
function loadEventList() {
    produ.addEventListener('click', addPro)
}

function addPro(e) {
    if (e.target.classList.contains('buy')) {
        const selectPro = e.target.parentElement
        readContent(selectPro)
    }
}

function readContent(product) {
    const infoProduct = {
        id: product.querySelector('.buy').getAttribute('data-id'),
        imagen: product.querySelector('div img').src,
        titulo: product.querySelector('h2').textContent,
        precio: product.querySelector('.pre').textContent,
        cantidad: 1
    }
    productos = [...productos, infoProduct]
    loadHTML();
    console.log(infoProduct)

}

function loadHTML() {
    productos.forEach(product => {
        const { id, imagen, titulo, precio, cantidad } = product;
        const fila = document.createElement('div')
        fila.classList.add('grid-item')
        fila.innerHTML = `
                <div class="grid-img">
                    <img src="${imagen}" alt="ALEMANIA 2022" class="produ">
                    <div class="pre">${precio}</div>
                </div>
                <h2 id="tittle-pro">${titulo}</h2>
                <h2 id="tittle-pro">Cantidad: ${cantidad}</h2>
            `
    })
}