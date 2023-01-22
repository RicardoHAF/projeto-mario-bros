/* 
OBETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo.

OBJETIVO 2 - quando o usuário clicar no X, devemos fechar a modal

OBETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o vídeo.

     Passo 1- pegar o elemento que respresenta o botão na tela, usando js

     Passo 2 - identificar qua
     
     Passo 3 - Pegar um elemento da modal no js

     Passo 4 -Abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X, devemos fechar a modal

     Passo 1- pegar o elemento de fechar modal usando js

     Passo 2 - identificar quando o usuário clicar no X

     Passo 3 - Fechar a modal

*/

// Passo 1- pegar o elemento que respresenta o botão na tela, usando js
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video")
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
     modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
     alternarModal();
     video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
     alternarModal();
     video.setAttribute("src","");
});

