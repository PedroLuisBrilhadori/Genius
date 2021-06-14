var jogo = {
    valores: [],
    entradas: [],
}
let jogadas = 0
let qntValores = 0

const tabuleiro = document.getElementById('tabuleiro');
const Celulas = document.querySelectorAll('[data-celula]');

jogo.valores[qntValores] = aleatorio()
desenha(jogo.valores[qntValores])

function desenha(id, s=2000){   

    let cell = document.getElementById(id);
    
    acende();

    function acende(){
        cell.classList.add('v');
        inicio()
    }

    function inicio(){
        return new Promise( remove => {
                setTimeout(() => {
                    remove()
            }, s)
        })
    }

    async function remove(){
        await inicio(); 
    } 

    remove().then(v => {
        cell.classList.remove('v');
    })    
}

function fazerJogada(id){
    if(id == jogo.valores[qntValores]){
        for(let i = 0; i < jogo.valores.length; i++){
            desenha(jogo.valores[i], 1000);
        }
    } else{

    }
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
