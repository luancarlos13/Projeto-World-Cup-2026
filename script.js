const normalizar = (texto = "") =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const aliases = {
  arabia: "arabia saudita",
  coreia: "coreia do sul",
  france: "franca",
  eua: "estados unidos",
  estadosunidos: "estados unidos",
  ecuador: "equador",
  equador: "equador",
  congo: "republica democratica do congo",
  curacau: "curacao",
  uzbesquitao: "uzbequistao",
  tchequia: "chequia",
  chequia: "chequia"
};

const coresPorTitulo = {
  "africa do sul": "#ffcd00",
  alemanha: "#000000",
  argentina: "#75aadb",
  "arabia saudita": "#006c35",
  argelia: "#006233",
  australia: "#ffd52f",
  austria: "#ed2939",
  belgica: "#ff0000",
  bosnia: "#002395",
  brasil: "#ffd52f",
  "cabo verde": "#171796",
  canada: "#ff0000",
  catar: "#8d1b3d",
  chequia: "#d7141a",
  colombia: "#ffcd00",
  "coreia do sul": "#0047a0",
  "costa do marfim": "#f77f00",
  croacia: "#171796",
  curacao: "#002b7f",
  egito: "#ce1126",
  equador: "#fcd116",
  escocia: "#005eb8",
  espanha: "#ff0000",
  "estados unidos": "#002868",
  franca: "#0055a4",
  gana: "#ffcd00",
  haiti: "#00209f",
  holanda: "#f77f00",
  inglaterra: "#ffffff",
  iraque: "#077b3e",
  ira: "#ff0000",
  japao: "#171796",
  jordania: "#007a3d",
  marrocos: "#c1272d",
  mexico: "#006847",
  noruega: "#ef2b2d",
  "nova zelandia": "#ffffff",
  panama: "#d21034",
  paraguai: "#d52b1e",
  portugal: "#da291c",
  "republica democratica do congo": "#007fff",
  senegal: "#00853f",
  suecia: "#fecc00",
  suiça: "#ff0000",
  tunez: "#e70013",
  tunisia: "#e70013",
  turquia: "#e30a17",
  uruguai: "#5b92e5",
  uzbequistao: "#171796"
};

const corPadrao = "#f5f5f5";

const selecoes = {
  1: { titulo: "África do Sul", imagem: "seleções/africa-do-sul.webp", paragraph: "A Seleção Sul-Africana, conhecida como Bafana Bafana, é a equipe nacional da África do Sul e é filiada à FIFA e à CAF." },
  2: { titulo: "Alemanha", imagem: "seleções/Alemanha.jfif", paragraph: "A Seleção Alemã é uma das equipes mais tradicionais do futebol mundial e tetracampeã da Copa do Mundo." },
  3: { titulo: "Argentina", imagem: "seleções/Argentina.webp", paragraph: "A Seleção Argentina é uma das maiores potências do futebol mundial, com grande tradição e inúmeros títulos." },
  4: { titulo: "Arábia Saudita", imagem: "seleções/arabia-saudita.webp", paragraph: "A Seleção Saudita é uma das principais equipes da Ásia e já teve campanhas destacadas em Copas do Mundo." },
  5: { titulo: "Argélia", imagem: "seleções/argelia.webp", paragraph: "A Seleção Argelina é uma potência do futebol africano, com grande tradição em competições continentais e mundiais." },
  6: { titulo: "Austrália", imagem: "seleções/australia.webp", paragraph: "A Seleção Australiana, conhecida como Socceroos, tem forte presença internacional e tradição no futebol asiático." },
  7: { titulo: "Áustria", imagem: "seleções/Austria.jpg", paragraph: "A Seleção Austríaca é uma equipe tradicional da Europa, com boa história em Copas do Mundo e Eurocopas." },
  8: { titulo: "Bélgica", imagem: "seleções/Bélgica.webp", paragraph: "A Bélgica é conhecida por sua geração de grandes talentos e por ser uma potência do futebol europeu." },
  9: { titulo: "Bósnia", imagem: "seleções/bósnia.jpg", paragraph: "A Seleção da Bósnia tem forte identidade e já fez campanhas importantes em torneios internacionais." },
  10: { titulo: "Brasil", imagem: "seleções/Brasil.jpg", paragraph: "A Seleção Brasileira é a maior potência do futebol mundial e a única pentacampeã da Copa do Mundo." },
  11: { titulo: "Cabo-Verde", imagem: "seleções/cabo-verde.webp", paragraph: "A Seleção Cabo-Verdiana é uma equipe marcante do futebol africano e vem ganhando destaque internacional." },
  12: { titulo: "Canadá", imagem: "seleções/Canada.jpg", paragraph: "O Canadá vem se consolidando como uma seleção forte na América do Norte e cresce no cenário internacional." },
  13: { titulo: "Catar", imagem: "seleções/catar.jpg", paragraph: "A Seleção do Catar tem destaque recente no futebol asiático e recebeu grande relevância internacional." },
  14: { titulo: "Chéquia", imagem: "seleções/tcheca.jpg", paragraph: "A Chéquia é uma seleção tradicional da Europa, conhecida por sua força tática e tradição." },
  15: { titulo: "Colômbia", imagem: "seleções/Colombia.webp", paragraph: "A Colômbia é uma seleção forte da América do Sul, com grande tradição em Copas do Mundo." },
  16: { titulo: "Coreia do Sul", imagem: "seleções/Coreia-do-sul.webp", paragraph: "A Coreia do Sul é uma potência asiática com campanhas consistentes em Copas do Mundo." },
  17: { titulo: "Costa do Marfim", imagem: "seleções/Costa-do-marfim.webp", paragraph: "A Costa do Marfim é uma das seleções mais fortes da África e tem grandes nomes no futebol europeu." },
  18: { titulo: "Croácia", imagem: "seleções/Croacia.webp", paragraph: "A Croácia é conhecida pelos seus talentos e por grandes campanhas internacionais, inclusive em finais de Copa." },
  19: { titulo: "Curaçao", imagem: "seleções/curaçao.jpg", paragraph: "Curaçao vem se destacando no cenário internacional com uma equipe jovem e competitiva." },
  20: { titulo: "Egito", imagem: "seleções/egito.jpg", paragraph: "O Egito é uma potência africana com tradição e grandes estrelas no futebol mundial." },
  21: { titulo: "Equador", imagem: "seleções/Equador.jpg", paragraph: "O Equador é uma seleção forte da América do Sul e vem se consolidando entre as melhores da região." },
  22: { titulo: "Escócia", imagem: "seleções/escócia.jpg", paragraph: "A Escócia é uma seleção tradicional do futebol britânico, com forte identidade e história." },
  23: { titulo: "Espanha", imagem: "seleções/Espanha.webp", paragraph: "A Espanha é uma potência do futebol europeu, com grandes títulos e um estilo muito técnico." },
  24: { titulo: "Estados Unidos", imagem: "seleções/EUA.webp", paragraph: "Os Estados Unidos vêm crescendo fortemente no futebol internacional e se destacam na CONCACAF." },
  25: { titulo: "França", imagem: "seleções/França.webp", paragraph: "A França é uma das seleções mais fortes do mundo, com grandes títulos e grandes talentos." },
  26: { titulo: "Gana", imagem: "seleções/gana.webp", paragraph: "Gana é uma seleção histórica da África, conhecida por suas campanhas marcantes e grandes nomes." },
  27: { titulo: "Haiti", imagem: "seleções/haiti.webp", paragraph: "Haiti é uma seleção tradicional do Caribe, com forte identidade e história no futebol internacional." },
  28: { titulo: "Holanda", imagem: "seleções/Holanda.png", paragraph: "A Holanda é uma potência do futebol europeu, famosa pela tradição de grandes gerações e talento." },
  29: { titulo: "Inglaterra", imagem: "seleções/Inglaterra.jpg", paragraph: "A Inglaterra é uma seleção histórica e uma das grandes potências do futebol mundial." },
  30: { titulo: "Iraque", imagem: "seleções/iraque.webp", paragraph: "O Iraque vem se destacando no futebol asiático e conquistou relevância internacional recente." },
  31: { titulo: "Irã", imagem: "seleções/Irã.webp", paragraph: "O Irã é uma seleção forte da Ásia, reconhecida por sua organização e tradição no futebol." },
  32: { titulo: "Japão", imagem: "seleções/Japão.webp", paragraph: "O Japão é uma potência asiática, com grande evolução tática e forte presença em Copas do Mundo." },
  33: { titulo: "Jordânia", imagem: "seleções/jordania.webp", paragraph: "A Jordânia tem se destacado no futebol asiático com campanhas de grande relevância recente." },
  34: { titulo: "Marrocos", imagem: "seleções/marrocos.jpeg", paragraph: "O Marrocos é uma seleção africana de grande destaque, com campanhas históricas e talento europeu." },
  35: { titulo: "México", imagem: "seleções/México.jpg", paragraph: "O México é uma das seleções mais tradicionais da CONCACAF e presença constante em Copas do Mundo." },
  36: { titulo: "Noruega", imagem: "seleções/Noruega.jpg", paragraph: "A Noruega é uma seleção forte da Europa, conhecida por grandes jogadores e tradição internacional." },
  37: { titulo: "Nova Zelândia", imagem: "seleções/Nova zelandia.webp", paragraph: "A Nova Zelândia é uma potência da Oceania e vem se consolidando no cenário internacional." },
  38: { titulo: "Panamá", imagem: "seleções/panamá.webp", paragraph: "O Panamá é uma seleção em crescimento na América Central, com destaque recente em competições internacionais." },
  39: { titulo: "Paraguai", imagem: "seleções/Paraguai.webp", paragraph: "O Paraguai é tradicional na América do Sul, com forte identidade e histórico em Copas do Mundo." },
  40: { titulo: "Portugal", imagem: "seleções/Portugal.webp", paragraph: "Portugal é uma seleção de grande tradição europeia, com inúmeros títulos e talentos de alto nível." },
  41: { titulo: "República Democrática do Congo", imagem: "seleções/congo.webp", paragraph: "A República Democrática do Congo é uma seleção histórica da África com forte tradição no futebol continental." },
  42: { titulo: "Senegal", imagem: "seleções/senegal.webp", paragraph: "O Senegal é uma seleção africana de grande relevância, com campanhas históricas e grandes estrelas." },
  43: { titulo: "Suécia", imagem: "seleções/Suécia.webp", paragraph: "A Suécia é uma seleção tradicional da Europa, conhecida por sua força coletiva e história." },
  44: { titulo: "Suiça", imagem: "seleções/suiça.webp", paragraph: "A Suíça é uma seleção muito organizada e está entre as mais competitivas da Europa." },
  45: { titulo: "Tunísia", imagem: "seleções/tunisia.webp", paragraph: "A Tunísia é uma seleção africana forte, com tradição e presença importante em grandes competições." },
  46: { titulo: "Turquia", imagem: "seleções/turquia.jpg", paragraph: "A Turquia é uma seleção tradicional da Europa, com grande história e evolução recente no futebol." },
  47: { titulo: "Uruguai", imagem: "seleções/Uruguai.webp", paragraph: "O Uruguai é uma das seleções mais históricas do mundo, bicampeão da Copa do Mundo." },
  48: { titulo: "Uzbequistão", imagem: "seleções/uzbesquistão.webp", paragraph: "O Uzbequistão é uma seleção em ascensão na Ásia, com forte crescimento no futebol internacional." }
};

const selecoesPorSlug = Object.entries(selecoes).reduce((accumulator, [id, selecao]) => {
  accumulator[normalizar(selecao.titulo)] = { id, ...selecao };
  return accumulator;
}, {});

function encontrarSelecaoPorTexto(texto = "") {
  const slug = aliases[normalizar(texto)] || normalizar(texto);

  if (selecoesPorSlug[slug]) {
    return selecoesPorSlug[slug];
  }

  return Object.values(selecoesPorSlug).find((selecao) => {
    const tituloSlug = normalizar(selecao.titulo);
    return tituloSlug.includes(slug) || slug.includes(tituloSlug);
  });
}

function preencherDetalhesDaSelecao() {
  const params = new URLSearchParams(window.location.search);
  const pais = params.get("pais");
  const selecao = pais
    ? Object.values(selecoesPorSlug).find((item) => normalizar(item.titulo) === pais)
    : null;

  const titulo = document.getElementById("detalhes-titulo");
  const imagem = document.getElementById("detalhes-imagem");
  const descricao = document.getElementById("detalhes-descricao");

  if (titulo && imagem && descricao && selecao) {
    titulo.textContent = selecao.titulo;
    imagem.src = selecao.imagem;
    imagem.alt = selecao.titulo;
    descricao.textContent = selecao.paragraph;

    const cor = coresPorTitulo[normalizar(selecao.titulo)] || corPadrao;
    document.body.style.background = cor;
    document.body.style.transition = "background-color 0.3s ease";

    const painel = document.querySelector("main");
    if (painel) {
      painel.style.background = "rgba(255,255,255,0.92)";
      painel.style.boxShadow = "0 10px 30px rgba(0,0,0,0.16)";
    }
  }
}

function adicionarCliqueNasBandeiras() {
  const cards = document.querySelectorAll(".container-cards .cards img");

  cards.forEach((imagem) => {
    imagem.style.cursor = "pointer";
    imagem.addEventListener("click", () => {
      const selecao = encontrarSelecaoPorTexto(imagem.alt || "");

      if (!selecao) {
        return;
      }

      const url = `selecao.html?pais=${encodeURIComponent(normalizar(selecao.titulo))}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".container-cards")) {
    adicionarCliqueNasBandeiras();
  }

  if (document.getElementById("detalhes-selecao")) {
    preencherDetalhesDaSelecao();
  }
});
