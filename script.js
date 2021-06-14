var jogo = {
    valores: [],
    entradas: []
}

const tabuleiro = document.getElementById('tabuleiro');
const Celulas = document.querySelectorAll('[data-celula]');

let jogadas = 0;
let valores = 0;
let id = aleatorio()
let cell = document.getElementById(id);

desenha(1);

function desenha(caso){
    if(caso == 1){
        for(let i = 0; i <= jogo.valores; i++){    
            jogo.valores[valores] = id;
            valores++

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
        }
    } else
        if(caso == 2){
            for(let i = 0; i < jogo.valores.length; i++){
                id = jogo.valores[i]
                cell = document.getElementById(id);
                
                acende()

                function acende(){
                    cell.classList.add('v');
                    espera()
                }

                function espera(){
                    return new Promise( remove => {
                        setTimeout(() => {
                            remove()
                        }, 2000)
                    })
                }

                async function remove(){
                    await espera()
                }

                remove().then(v => {
                    cell.classList.remove('v');
                })

            }
        }

}


Celulas.forEach(celula => {
    celula.addEventListener('click', ClikMouse, {once: true})
});

function ClikMouse(e){
    const celula = e.target;
    
    if(celula.id == jogo.valores[jogadas]){
        jogo.entradas[jogadas] = celula.id
        jogadas++
        desenha(2)
    } else{
        console.log('perdeu');
    }

    
    Celulas.forEach(celula => {
        celula.addEventListener('click', ClikMouse, {once: true})
    });
    
}

function aleatorio(){
    let nmr = Math.floor(Math.random() * 9 + 1);
    return nmr;
}