const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".sol-lua");

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

botaoAlterarTema.addEventListener("click", () => {
    
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
       
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png");

    } else {
     
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png");
    }
});
