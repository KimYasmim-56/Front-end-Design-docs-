const imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
    "imagem4.jpg",
    "imagem5.jpg",
    "imagem6.jpg",
    "imagem7.jpg",
    "imagem8.jpg",
    "imagem9.jpg",
];

// console.log(imagens[5]);
let indice = 0;

function mostrarSlide(){
    document.getElementById('imagem').src = imagens[indice];
}
function proximoSlide(){
    indice++;
    if(indice >= imagens.length){
        indice = 0;
    }
    mostrarSlide();
}
function voltarSlide(){
    indice--;
    if(indice < 0){
        indice = magens.length - 1;
    }
    mostrarSlide();
}