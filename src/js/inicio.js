//RESPONSIVIDADE DO HEADER
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "src/images/icons/aberto.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "src/images/icons/fechado.svg";
    }
}
//FIM DA RESPONSIVIDADE DO HEADER

// BOTÕES DOS DEVS

function showDesc1(){
    let devInfo1 = document.querySelector('#dev-bru');
    if (devInfo1.classList.contains('abrir')){
        devInfo1.classList.remove('abrir');
    }else{
        devInfo1.classList.add('abrir');
    }
}



// FUNÇÃO PARA LINKAR A PÁGINA LOGIN COM INICIO
function sair() {
  window.location.href = "../../index.html";
}
document.getElementById('saida').addEventListener("click", sair);