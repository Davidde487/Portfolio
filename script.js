const app = document.getElementById("app");
const catalogo = document.createElement("div");
catalogo.className = "catalogo";

materiais.forEach(pedra => {
  const div = document.createElement("div");
  div.className = "cor";

  if (pedra.imagemQuadrado) {
    div.style.backgroundImage = `url(${pedra.imagemQuadrado})`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
  } else {
    div.style.backgroundColor = pedra.corFundo;
  }

  div.title = pedra.nome;
  div.onclick = () => mostrarModal(pedra);
  catalogo.appendChild(div);
});

app.appendChild(catalogo);

function mostrarModal(pedra) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.onclick = () => modal.remove();

  const content = document.createElement("div");
  content.className = "modal-content";
  content.onclick = e => e.stopPropagation();

  const usosHtml = pedra.usos.map(uso => `<li>${uso}</li>`).join("");
  const imagensHtml = pedra.imagens.map(url => `<img src="${url}" alt="${pedra.nome}">`).join("");

  content.innerHTML = `
    <h2>${pedra.nome}</h2>
    <p>${pedra.descricao}</p>
    <h3>Usos comuns:</h3>
    <ul>${usosHtml}</ul>
    ${imagensHtml}
  `;
  const galeriaContainer = document.querySelector(".galeria-materiais");

materiais.forEach((material) => {
  const card = document.createElement("div");
  card.classList.add("material-card");

  const img = document.createElement("img");
  img.src = material.imagemQuadrado || material.imagens[0];
  img.alt = material.nome;

  const nome = document.createElement("h3");
  nome.textContent = material.nome;

  card.appendChild(img);
  card.appendChild(nome);
  galeriaContainer.appendChild(card);
});


  modal.appendChild(content);
  document.body.appendChild(modal);
}
