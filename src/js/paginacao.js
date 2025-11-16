const list = document.querySelectorAll(".livro");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const pageNumber = document.getElementById("page-number")

const maxItem = 8; // ESSA PARTE INDICA QUANTOS ITENS VÃO APARECER POR VEZ NA TELA
let index = 1; // PÁGINA ATUAL

const totalPages = Math.ceil(list.length / maxItem);

// MOSTRA OS ITENS
function showItems() {
    list.forEach(item => { 
        item.classList.remove("show"); 
        item.classList.add("hide"); 
    });

    let start = (index - 1) * maxItem;
    let end = index * maxItem;

    for (let i = start; i < end && i < list.length; i++) {
        list[i].classList.remove("hide");
        list[i].classList.add("show");
    }

pageNumber.textContent = index;
}

// Botão NEXT
next.addEventListener("click", () => {
    if (index < totalPages) {
        index++;
        showItems();
    }
});

// Botão PREV
prev.addEventListener("click", () => {
    if (index > 1) {
        index--;
        showItems();
    }
});

// Iniciar
window.onload = () => {
    showItems();
};
