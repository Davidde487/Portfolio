const pedras = [
  {
    nome: "Branco Siena",
    cor: "#f2f2f2",
    descricao: "Ideal para pias e bancadas modernas com acabamento polido.",
    imagem: "https://images.unsplash.com/photo-1567016470775-39f1dc2fc418"
  },
  {
    nome: "Verde Ubatuba",
    cor: "#1b2e1e",
    descricao: "Muito resistente, indicado para cozinhas e áreas externas.",
    imagem: "https://images.unsplash.com/photo-1590080876865-d68f8d7f67d3"
  },
  {
    nome: "Preto São Gabriel",
    cor: "#111111",
    descricao: "Elegante e versátil, perfeito para cozinhas e lavabos.",
    imagem: "https://images.unsplash.com/photo-1594824476967-48c8b9642738"
  }
];

const app = document.getElementById("app");

const catalogo = document.createElement("div");
catalogo.className = "catalogo";

pedras.forEach(pedra => {
  const div = document.createElement("div");
  div.className = "cor";
  div.style.backgroundColor = pedra.cor;
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

  content.innerHTML = `
    <h2>${pedra.nome}</h2>
    <p>${pedra.descricao}</p>
    <img src="${pedra.imagem}" alt="${pedra.nome}">
  `;

  modal.appendChild(content);
  document.body.appendChild(modal);
}
