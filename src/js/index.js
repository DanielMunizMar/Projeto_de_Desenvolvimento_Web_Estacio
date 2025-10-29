//Imagem da logo quando clicada retorna a página inicial do site.

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../../index.html";
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

const detalheVaga = document.getElementById("detalhesDaVaga");
const containerVaga = document.getElementById("containerVaga");
const botoesDescricao = document.querySelectorAll(".btn-descricao");

function mostrarDetalhesDaVaga(vagaId) {
  const vaga = vagas[vagaId];
  if (vaga) {
    detalheVaga.innerHTML = `
    <h2>${vaga.titulo}</h2><br>
    <p>${vaga.descricao}</p>
    <button>Candidatar-se</button>
  `;
  } else {
    alert("Vaga não encontrada.");
  }
}

function fecharDetalhesDaVaga() {
  containerVaga.style.display = "none";
  detalheVaga.innerHTML = "";
}

botoesDescricao.forEach((botao) => {
  botao.addEventListener("click", () => {
    containerVaga.style.display = "flex";
    const vagaId = botao.getAttribute("data-vaga");
    mostrarDetalhesDaVaga(vagaId);
  });
});

containerVaga.addEventListener("click", (e) => {
  if (e.target.id === "containerVaga") {
    fecharDetalhesDaVaga();
  } 
});
