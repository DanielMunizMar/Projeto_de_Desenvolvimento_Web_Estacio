//Imagem da logo quando clicada retorna a página inicial do site.

document.getElementById("logo").addEventListener("click", () => {
window.location.href = "../../index.html"
});

// Quando colocar o começo das palavras que tem no título da vaga, o sistema filtra e mostra apenas as vagas que contém aquelas palavras.
document.getElementById("btnPesquisa").addEventListener("click", () => {
    const query = document.getElementById("pesquisa").value.toLowerCase();
    const items = document.querySelectorAll(".vaga-descricao");

    items.forEach(item => {
        const title = item.querySelector("h4").textContent.toLowerCase();
        if (title.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
})

