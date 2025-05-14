const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".carrossel .imagem");
const informacoes = document.querySelectorAll(".informacoes");

// Clique nos botões do carrossel
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remover botão selecionado
        DesativarBotaoSelecionado();
        botao.classList.add("selecionado");

        // Trocar imagem
        EsconderImagemAtiva();
        imagens[indice].classList.add("ativa");

        // Trocar informação
        EsconderInformacoesAtivas();
        informacoes[indice].classList.add("ativa");

        // Atualizar o índice atual
        indiceAtual = indice;
    });
});

// Setinhas do carrossel
const btnAnterior = document.getElementById("anterior");
const btnProximo = document.getElementById("proximo");

let indiceAtual = 0;

btnAnterior.addEventListener("click", () => {
    if (indiceAtual > 0) {
        indiceAtual--;
    } else {
        indiceAtual = imagens.length - 1;
    }
    atualizarCarrossel(indiceAtual);
});

btnProximo.addEventListener("click", () => {
    if (indiceAtual < imagens.length - 1) {
        indiceAtual++;
    } else {
        indiceAtual = 0;
    }
    atualizarCarrossel(indiceAtual);
});

function atualizarCarrossel(indice) {
    EsconderImagemAtiva();
    EsconderInformacoesAtivas();
    DesativarBotaoSelecionado();

    imagens[indice].classList.add("ativa");
    informacoes[indice].classList.add("ativa");
    botoesCarrossel[indice].classList.add("selecionado");
}

// Funções auxiliares
function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".imagem.ativa");
    if (imagemAtiva) {
        imagemAtiva.classList.remove("ativa");
    }
}

function EsconderInformacoesAtivas() {
    const infoAtiva = document.querySelector(".informacoes.ativa");
    if (infoAtiva) {
        infoAtiva.classList.remove("ativa");
    }
}

function DesativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}
