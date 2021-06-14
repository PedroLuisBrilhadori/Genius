jogo = {
    computadorValores: [],
    jogadorValores: [],
    tamanhoMaximo:  4,
    estagioDaCombinacao: 1,
    combinacaoMaxima: 15,

    interface: {
        tabuleiro: document.querySelector('.jogo'),
        botoes: document.getElementsByClassName('celula'),

        ascende(index){
            const celula = jogo.interface.tabuleiro.children[index];
            celula.classList.add('v');  
            //audio sim, então
            setTimeout(() =>{
                celula.classList.remove('v');
            }, 1500);
        },
    },

    async carregar() {
        return new Promise(r =>{
            console.log("carregando...")
            const memoria = jogo.interface.tabuleiro
            const memoriaBotao = jogo.interface.botoes
            
            Array.prototype.forEach.call(memoriaBotao, (elemento) => {
                elemento.addEventListener("click", () =>{
                    if(memoria.classList.contains("p")){
                        console.log('oi')
                    }
                })
            })
        })
    },
    
    comecar() {
        jogo.computadorValores = jogo.criarCombinacao()
        jogo.estagioDaCombinacao = 1;
        jogo.jogadorValores = [];
    },

    criarCombinacao(){
        let novaCombinacao = []
        for (let i = 0; i < jogo.combinacaoMaxima; i++){
            const position = Math.floor((Math.random() * jogo.tamanhoMaximo) + 1)
            novaCombinacao.push(position - 1)
        }
        return novaCombinacao;
    }
}

jogo.carregar()