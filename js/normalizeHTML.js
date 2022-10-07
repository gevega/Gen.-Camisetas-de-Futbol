const items = document.getElementById('items');
console.log(menu)

colapse2.addEventListener('click', normalizeHTML)

const normalizar=(entradas, observador)=>{
    console.log('lo veo bro')
    let vw = document.documentElement.clientWidth
    let vh = document.documentElement.clientHeight
    normalizeHTML()
}

const observador = new IntersectionObserver(normalizar, {
	root: null,
	rootMargin: '0px',
	threshold: 1.0
})

observador.observe(items);

function normalizeHTML() {
    vw = document.documentElement.clientWidth
    vh = document.documentElement.clientHeight
    if (vh >= 640 && vw >= 640) {
        menu.style.display = 'flex'
    } else {
        if(e.target.classList.contains('svg-icon')){
            menu.style.display = 'none'
        }    
    }
}