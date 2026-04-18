//Elementos de manipulação global
let input = document.getElementById("searchInput");
const buscar = document.getElementById("searchBtn");
const lista = document.getElementById("countriesContainer");
const seletorRegiao = document.getElementById("regionSelect");
const seletorIdioma = document.getElementById("idiomaSelect");

// Modal
const modal = document.getElementById("countryModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.getElementById("closeModal");

// Modo escuro
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};

// Função principal
async function carregar(nomeFiltro = "", regiaoFiltro = "", idiomaFiltro = "") {
  try {
    // Consumo da API
    let url;
    if (nomeFiltro) {
      url = `https://restcountries.com/v3.1/name/${encodeURIComponent(nomeFiltro)}`;
    } else if (regiaoFiltro) {
      url = `https://restcountries.com/v3.1/region/${regiaoFiltro}`;
    } else if (idiomaFiltro) {
      url = `https://restcountries.com/v3.1/lang/${idiomaFiltro}`;
    } else {
      url = `https://restcountries.com/v3.1/all`;
    }
    const resposta = await fetch(url);

    // Tratamento de alguns erros especificos
    if (resposta.status === 404) {
      alert("Nenhum país encontrado com esse nome");
      return;
    }
    if (!resposta.ok) throw new Error("País não encontrado");

    // Os dados da API
    const dados = await resposta.json();

    lista.innerHTML = "";

    //Aplicação dos dados da API
    dados.forEach((pais) => {
      const card = document.createElement("div");

      const nomeNativo = pais.name.nativeName
        ? Object.values(pais.name.nativeName)[0].common
        : pais.name.common;

      card.className = "country-card";

      card.onclick = () => mostrarDetalhes(pais);

      card.innerHTML = `
          <img src="${pais.flags.png}" alt="Bandeira de ${pais.name.common}">
          <h3>${pais.name.common}</h3>
          <p style="color: #3498db; font-style: italic;">(${nomeNativo})</p>
          <p>Capital: ${pais.capital ? pais.capital[0] : "N/A"}</p>
          <p>Populção: ${pais.population.toLocaleString()}</p>
          <p>Continente: ${pais.continents ? pais.continents[0] : "N/A"}</p>
          `;
      lista.appendChild(card);
    });
  } catch (erro) {
    console.error("Não foi possivel manter conexão coma a API", erro);
    return;
  }
}

// Função do Modal que dispara ao clicar em um CARD
function mostrarDetalhes(pais) {
  const nomeNativo = pais.name.nativeName
    ? Object.values(pais.name.nativeName)[0].common
    : "N/A";

  const idiomas = pais.languages
    ? Object.values(pais.languages).join(", ")
    : "N/A";

  let moedas = "N/A";
  if (pais.currencies) {
    moedas = Object.values(pais.currencies)
      .map((m) => `${m.name} (${m.symbol})`)
      .join(", ");
  }

  modalDetails.innerHTML = `
        <img src="${pais.flags.png}" style="width: 100%; border-radius: 8px; margin-bottom: 15px;">
        <h2>${pais.name.common}</h2>
        <p><strong>Nome Nativo:</strong> ${nomeNativo}</p>
        <hr style="margin: 15px 0; opacity: 0.2;">
        <p><strong>Idiomas:</strong> ${idiomas}</p>
        <p><strong>Moedas:</strong> ${moedas}</p>
        <p><strong>Área:</strong> ${pais.area.toLocaleString()} km²</p>
        <p><strong>População:</strong> ${pais.population.toLocaleString()} hab.</p>
         <p><strong>Capital:</strong>${pais.capital ? pais.capital[0] : "N/A"}</p>
        <p><strong>Região:</strong> ${pais.region} (${pais.subregion || ""})</p>
    `;
  modal.style.display = "flex";
}

// Modo escuro com LocalStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.innerText = "☀️ Light Mode";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Salva a escolha e muda o texto do botão
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    themeToggle.innerText = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.innerText = "🌙 Dark Mode";
  }
});

// Chamada do Input com o botão Buscar
buscar.addEventListener("click", () => {
  const valor = input.value.trim();
  if (valor === "") {
    alert("Digite um nome de país!");
    return;
  }
  seletorRegiao.value = "";
  carregar(valor);
});

// Evento do Select por Continentes
seletorRegiao.addEventListener("change", (event) => {
  const regiaoSelecionada = event.target.value;
  input.value = "";

  if (regiaoSelecionada === "") {
    carregar();
  } else {
    carregar("", regiaoSelecionada);
  }
});

//Evento do Select por Idioma Globais
seletorIdioma.addEventListener("change", (event) => {
  const idiomaSelecionado = event.target.value;
  input.value = "";
  seletorRegiao.value = "";

  if (idiomaSelecionado === "") {
    carregar();
  } else {
    carregar("", "", idiomaSelecionado);
  }
});

// Carrega a função já chamando a API
carregar();
