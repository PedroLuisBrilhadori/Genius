var jogo = {
    valores: [2, 3],
    entradas: [],
}
let jogadas = 0
let qntValores = 0
let cell = 0
let turno = 0

const tabuleiro = document.getElementById('tabuleiro');
const Celulas = document.querySelectorAll('[data-celula]');

// jogo.valores[qntValores] = aleatorio()
// desenha(jogo.valores[qntValores]) 

espera(aleatorio())


async function espera(id, s=2000){
    let v;
    try {
        if(turno == 0){
            desenha(id)
        }
    } catch(e){

    }

    setTimeout(() => {
        return apaga(id)
    }, s)
}

function apaga(id){
    let cell = document.getElementById(id)
    cell.classList.remove('v')
}

function desenha(id){
    let cell = document.getElementById(id)
    cell.classList.add('v')

}


Celulas.forEach(celula => {
    celula.addEventListener('click', ClikMouse, {once: true})
});

function ClikMouse(e){
    const celula = e.target;
    
    fazerJogada(celula.id)

    
    Celulas.forEach(celula => {
        celula.addEventListener('click', ClikMouse, {once: true})
    });
    
}

function aleatorio(){
    let nmr = Math.floor(Math.random() * 9 + 1);
    return nmr;
}
