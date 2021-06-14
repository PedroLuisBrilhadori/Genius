var jogo = {
    valores: [2, 3],
    entradas: [],
}
let jogadas = 0
let qntValores = 0

const tabuleiro = document.getElementById('tabuleiro');
const Celulas = document.querySelectorAll('[data-celula]');

// jogo.valores[qntValores] = aleatorio()
// desenha(jogo.valores[qntValores])
desenha(2)


function desenha(id, s=2000){   

    let cell = document.getElementById(id);
    
    acende();

    function acende(){
        cell.classList.add('v');
        inicio()
    }

    function inicio(){
        return new Promise( espera => {
                setTimeout(() => {
                    espera()
            }, s)
        })
    }

    async function espera(){
        await inicio(); 

        // for(let i = 0; i < jogo.valores.length; i++){
        //     await desenha(id)
        // }

    } 

    espera().then(v => {
        cell.classList.remove('v');
    })    
}

async function fazerJogada(id){

    for(let i = 0; i < jogo.valores.length; i++){
        if(id == jogo.valores[i]){
            desenha(jogo.valores[i], 1000);
        }
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
