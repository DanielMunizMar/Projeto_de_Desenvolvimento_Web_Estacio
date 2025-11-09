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
    titulo: "Especialista em E-books",
    descricao:
      "Atuar na conversão e formatação de livros para diversos formatos digitais (EPUB, MOBI, PDF interativo). Exige domínio de HTML, CSS e ferramentas de formatação especializadas.",
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
const btnFecharVaga = document.getElementById("btnFechar");

function mostrarDetalhesDaVaga(vagaId) {
  const vaga = vagas[vagaId];
  if (vaga) {
    containerVaga.style.display = "block";
    detalheVaga.innerHTML = `
    <h2>${vaga.titulo}</h2><br>
    <p>${vaga.descricao}</p>
    <button class="btn-candidatar">Candidatar-se</button>
  `;
  } else {
    detalheVaga.innerHTML = "<p>Vaga não encontrada.</p>";
  }
}

// FECHABLOCO DA VAGA PELO BOTÃO "X"
btnFecharVaga.addEventListener("click", () => {
  containerVaga.style.display = "none";
});

// MOSTRAR DETALHES DA VAGA AIO 
botoesDescricao.forEach((botao) => {
  botao.addEventListener("click", () => {
    containerVaga.style.display = "flex";
    const vagaId = botao.getAttribute("data-vaga");
    mostrarDetalhesDaVaga(vagaId);
  });
});

//RESPONSIVIDADE DO HEADER
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../images/icons/aberto.svg";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../images/icons/fechado.svg";
    }
}
//FIM DA RESPONSIVIDADE DO HEADER