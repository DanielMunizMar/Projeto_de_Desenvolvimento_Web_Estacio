<?php 

$vagas = [
    'devbackend' => [
        'titulo' => 'Desenvolvedor Back-End',
        'descricao' => 'Buscamos um profissional com experiência em PHP e MySQL para manutenção e desenvolvimento de APIs internas. Experiência com Laravel ou Symfony é um diferencial. Trabalho em regime remoto ou híbrido.'
    ],
    'atendentesac' => [
        'titulo' => 'Atendente SAC',
        'descricao' => 'Responsável pelo atendimento ao cliente via canais digitais (e-mail e chat). É essencial ter excelente comunicação, paciência e foco na resolução de problemas.'
    ],
    'editor' => [
        'titulo' => 'Editor(a) de Texto',
        'descricao' => 'Revisão e padronização de manuscritos, garantindo a qualidade ortográfica e gramatical. Necessário conhecimento aprofundado nas normas da ABNT e vasta experiência editorial.'
    ],
    'especialistadedados' => [
        'titulo' => 'Especialista em E-books (EPUB, MOBI, PDF interativo)',
        'descricao' => 'Atuar na conversão e formatação de livros para diversos formatos digitais (EPUB, MOBI). Exige domínio de HTML, CSS e ferramentas de formatação especializadas.'
    ],
    'gerenteprojetos' => [
        'titulo' => 'Gerente de Projetos',
        'descricao' => 'Liderança e planejamento do ciclo de vida dos projetos editoriais. Experiência com metodologias ágeis (Scrum/Kanban) e gestão de stakeholders.'
    ],
    'ilustrador' => [
        'titulo' => 'Ilustrador(a)',
        'descricao' => 'Criação de artes para capas, diagramação interna e materiais promocionais. Portfólio é indispensável. Domínio do Pacote Adobe (Illustrator, Photoshop).'
    ]
]

$vaga_id = $_GET['id'] ?? null;

if ($vaga_id && isset(vagas[$vaga_id])) {
    $vaga_atual = vagas[$vaga_id]; 
} else {
    $vaga_atual = [
        'titulo' => 'Vaga não encontrada',
        'descricao' => 'Vaga não disponível',
    ];
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $vaga_atual['titulo'] ?></title>
</head>
<body>
    <section id="detalhe-vaga">
        <h1><?= $vaga_atual['titulo'] ?></h1>
        <p><?= $vaga_atual['descricao'] ?></p>
    </section>
</body>
</html>


