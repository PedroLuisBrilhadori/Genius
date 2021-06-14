jogo = {
    computadorValores: [],
    jogadorValores: [],
    tamanhoMaximo:  4,
    estagioDaCombinacao: 1,
    combinacaoMaxima: 15,

    interface: {
        botoes: document.querySelector('.jogo'),

        ascende(index){
            const celula = jogo.interface.botoes.children[index];
            celula.classList.add('v');
            //audio sim, então
            setTimeout(() =>{
                celula.classList.remove('v');
            }, 1500);
        },
    },

    carregar() {},
    
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
