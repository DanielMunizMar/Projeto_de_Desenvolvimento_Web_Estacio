//Imagem da logo quando clicada retorna a página inicial do site.

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../../index.html";
});

// Quando colocar o começo das palavras que tem no título da vaga, o sistema filtra e mostra apenas as vagas que contém aquelas palavras.
document.getElementById("btnPesquisa").addEventListener("click", () => {
  const palavraPesquisa = document
    .getElementById("pesquisa")
    .value.toLowerCase();
  const vagaDescricao = document.querySelectorAll(".vaga-descricao");

  items.forEach((vagaDescricao) => {
    const title = vagaDescricao.querySelector("h4").textContent.toLowerCase();
    if (title.includes(palavraPesquisa)) {
      vagaDescricao.style.display = "block";
    } else {
      vagaDescricao.style.display = "none";
    }
  });
});

// Quando clicar no "Ver descrição" de uma vaga, exibirá uma página com a descrição completa da vaga.
const vagas = {
  devbackend: {
    titulo: "Desenvolvedor Back-End",
    descricao:
      "Buscamos um profissional com experiência em PHP e MySQL para manutenção e desenvolvimento de APIs internas. Experiência com Laravel ou Symfony é um diferencial. Trabalho em regime remoto ou híbrido.",
  },

  atendentesac: {
    titulo: "Atendente SAC",
    descricao:
      "Responsável pelo atendimento ao cliente via canais digitais (e-mail e chat). É essencial ter excelente comunicação, paciência e foco na resolução de problemas.",
  },

  editor: {
    titulo: "Editor(a) de Texto",
    descricao:
      "Revisão e padronização de manuscritos, garantindo a qualidade ortográfica e gramatical. Necessário conhecimento aprofundado nas normas da ABNT e vasta experiência editorial.",
  },

  especialistadedados: {
    titulo: "Especialista em E-books (EPUB, MOBI, PDF interativo)",
    descricao:
      "Atuar na conversão e formatação de livros para diversos formatos digitais (EPUB, MOBI). Exige domínio de HTML, CSS e ferramentas de formatação especializadas.",
  },

  gerenteprojetos: {
    titulo: "Gerente de Projetos",
    descricao:
      "Liderança e planejamento do ciclo de vida dos projetos editoriais. Experiência com metodologias ágeis (Scrum/Kanban) e gestão de stakeholders.",
  },

  ilustrador: {
    titulo: "Ilustrador(a)",
    descricao:
      "Criação de artes para capas, diagramação interna e materiais promocionais. Portfólio é indispensável. Domínio do Pacote Adobe (Illustrator, Photoshop).",
  },
};

document.getElementById("btnDescricao").addEventListener("click", () => {
  const vagaId = document
    .getElementById("btnDescricao")
    .getAttribute("data-vaga");

  const vaga = vagas[vagaId];
  const detalhesDaVaga = document.getElementById("detalhesDaVaga");

  if (vaga) {
    detalhesDaVaga.innerHTML = `
      <h2>${vaga.titulo}</h2>
      <p>${vaga.descricao}</p>
      <button id="btnCandidatar">Candidatar-se</button>
    `;
  }
});
