//Imagem da logo quando clicada retorna a página inicial do site.

document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../../index.html";
});

// JSON para armazenar as informações das vagas
const vagas = {
  devbackend: {
    nome: "Desenvolvedor Back-End",
    descricao:
      "Buscamos um profissional com experiência em PHP e MySQL para manutenção e desenvolvimento de APIs internas ou externas. Experiência com Laravel ou Symfony é um diferencial. Trabalho em regime híbrido.",
  },

  atendentesac: {
    nome: "Atendente SAC",
    descricao:
      "Responsável pelo atendimento ao cliente via canais digitais (e-mail e chat). Essencial ter excelente comunicação, paciência e foco na resolução de problemas.",
  },

  editordetexto: {
    nome: "Editor(a) de Texto",
    descricao:
      "Revisão e padronização de manuscritos, garantindo a qualidade ortográfica e gramatical. Necessário conhecimento aprofundado nas normas da ABNT e vasta experiência editorial.",
  },

  especialistadedados: {
    nome: "Especialista em E-books",
    descricao:
      "Atuar na conversão e formatação de livros para diversos formatos digitais (EPUB, MOBI, PDF interativo). Exige domínio necessário de HTML, CSS e ferramentas de formatação especializadas.",
  },

  gerenteprojetos: {
    nome: "Gerente de Projetos",
    descricao:
      "Liderança e planejamento do ciclo de vida dos projetos editoriais. Experiência com metodologias ágeis Scrum e Kanban, além gestão de stakeholders.",
  },

  ilustrador: {
    nome: "Ilustrador(a)",
    descricao:
      "Criação de artes para capas, diagramas internos e materiais promocionais. Portifólio é indispensável. Domínio do Pacote Adobe (Illustrator, Photoshop e outros).",
  },
};

const detalheVaga = document.getElementById("detalhesDaVaga");
const containerVaga = document.getElementById("containerVaga");
const botoesDescricao = document.querySelectorAll(".btn-descricao");
const btnFecharVaga = document.getElementById("btnFechar");

// Função que exibe o bloco de detalhes da vaga
function mostrarDetalhesDaVaga(vagaId) {
  const vaga = vagas[vagaId];
  if (vaga) {
    containerVaga.style.display = "flex";
    detalheVaga.innerHTML = `
  <div class="space-center">
    <h2>${vaga.nome}</h2><br>
    <p>${vaga.descricao}</p>
    <button class="btn-candidatar">Candidatar-se</button>
  </div>
    `;
  } else {
    detalheVaga.innerHTML = "<p>Vaga não encontrada.</p>";
  }
}

// Fecha o bloco da vaga quando clica no "X"
btnFecharVaga.addEventListener("click", () => {
  containerVaga.style.display = "none";
});

// Ao clicar no botão "Ver descrição", irá exibir um bloco com os detalhes da vaga
botoesDescricao.forEach((botao) => {
  botao.addEventListener("click", () => {
    containerVaga.style.display = "flex";
    const vagaId = botao.getAttribute("data-vaga");
    mostrarDetalhesDaVaga(vagaId);
  });
});

//RESPONSIVIDADE DO HEADER
function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "../images/icons/aberto.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "../images/icons/fechado.svg";
  }
}
//FIM DA RESPONSIVIDADE DO HEADER

function showDesc(devdesc) {
  const target = document.getElementById(devdesc);
  if (!target) return;

  const isVisible = target.style.display === 'block';

  document.querySelectorAll('.devdesc').forEach(div => {
    div.style.display = 'none';
  });

  if (!isVisible) {
    target.style.display = 'block';
  }
}