const materiais = [
  {
    nome: "Branco Siena",
    corFundo: "#f2f2f2", // ou coloque uma imagem abaixo
    descricao: "Ideal para pias e bancadas modernas com acabamento polido.",
    usos: ["Pias", "Bancadas", "Revestimentos"],
    imagemQuadrado: "", // imagem opcional no quadrado (se quiser)
    imagens: [
      "https://images.unsplash.com/photo-1567016470775-39f1dc2fc418",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    ]
  },
  {
    nome: "Verde Ubatuba",
    corFundo: "#1b2e1e",
    descricao: "Muito resistente, indicado para cozinhas e áreas externas.",
    usos: ["Cozinhas", "Áreas externas", "Balcões"],
    imagemQuadrado: "",
    imagens: [
      "https://images.unsplash.com/photo-1590080876865-d68f8d7f67d3",
      ""
    ]
  },
  {
    nome: "Preto São Gabriel",
    corFundo: "#111111",
    descricao: "Elegante e versátil, perfeito para cozinhas e lavabos.",
    usos: ["Cozinhas", "Lavabos", "Mesas"],
    imagemQuadrado: "",
    imagens: [
      "https://images.unsplash.com/photo-1594824476967-48c8b9642738",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
    ]
  }
];
<section id="materiais">
  <h2>Nossos Materiais</h2>
  <div class="galeria-materiais">
    <div class="material-card">
      <img src="images/amarelo-icarai.jpg" alt="Amarelo Icaraí">
      <h3>Amarelo Icaraí</h3>
    </div>
    <div class="material-card">
      <img src="images/amarelo-icarai-ambiente.jpg" alt="Amarelo Icaraí em Ambiente">
      <h3>Amarelo Icaraí (Ambiente)</h3>
    </div>
    <div class="material-card">
      <img src="images/amarelo-estelar.jpg" alt="Amarelo Estelar">
      <h3>Amarelo Estelar</h3>
    </div>
    <div class="material-card">
      <img src="images/amarelo-estelar-cozinha.jpg" alt="Amarelo Estelar na Cozinha">
      <h3>Amarelo Estelar (Ambiente)</h3>
    </div>
    <div class="material-card">
      <img src="images/amarelo-estelar-cozinha-2.jpg" alt="Amarelo Estelar em Cozinha Moderna">
      <h3>Amarelo Estelar (Cozinha 2)</h3>
    </div>
  </div>
</section>
