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