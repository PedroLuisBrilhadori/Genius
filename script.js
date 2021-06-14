var jogo = {
    valores: [],
    entradas: []
}

var id = aleatorio()
var cell = document.getElementById(id);

const tabuleiro = document.getElementById('tabuleiro');
const Celulas = document.querySelectorAll('[data-celula]');

acende()

function acende(){
    cell.classList.add('v');
    inicio()
}


function inicio(){
    return new Promise( remove => {
            setTimeout(() => {
                remove()
        }, 2000)
    })
}



async function remove(){
    await inicio(); 
}   

remove().then(v => {
    cell.classList.remove('v');
})



Celulas.forEach(celula => {
    celula.addEventListener('click', ClikMouse, {once: true})
});

function ClikMouse(e){
    const celula = e.target;
    console.log(aleatorio());
    
    Celulas.forEach(celula => {
        celula.addEventListener('click', ClikMouse, {once: true})
    });
    
}

function aleatorio(){
    let nmr = Math.floor(Math.random() * 9 + 1);
    return nmr;
}