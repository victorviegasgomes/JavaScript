const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const quadrado = {
  x: 150,
  y: 100,
  tamanho: 50,
  cor: "blue",
  velocidade: 3,
  direcao: { x: 0, y: 0 }
};

const teclasPressionadas = new Set();
let tocando = false;

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = quadrado.cor;
  ctx.fillRect(quadrado.x, quadrado.y, quadrado.tamanho, quadrado.tamanho);
}

function atualizarDirecao() {
  quadrado.direcao.x = 0;
  quadrado.direcao.y = 0;

  if (teclasPressionadas.has("ArrowUp")) quadrado.direcao.y = -1;
  if (teclasPressionadas.has("ArrowDown")) quadrado.direcao.y = 1;
  if (teclasPressionadas.has("ArrowLeft")) quadrado.direcao.x = -1;
  if (teclasPressionadas.has("ArrowRight")) quadrado.direcao.x = 1;
}

function atualizarPosicao() {
  quadrado.x += quadrado.direcao.x * quadrado.velocidade;
  quadrado.y += quadrado.direcao.y * quadrado.velocidade;
}

function loop() {
  atualizarPosicao();
  desenhar();
  requestAnimationFrame(loop);
}

// Teclado
window.addEventListener("keydown", (e) => {
  teclasPressionadas.add(e.key);
  atualizarDirecao();
});

window.addEventListener("keyup", (e) => {
  teclasPressionadas.delete(e.key);
  atualizarDirecao();
});

// Botões (mobile)
function ativarBotao(direcao) {
  if (direcao === "up") teclasPressionadas.add("ArrowUp");
  if (direcao === "down") teclasPressionadas.add("ArrowDown");
  if (direcao === "left") teclasPressionadas.add("ArrowLeft");
  if (direcao === "right") teclasPressionadas.add("ArrowRight");
  atualizarDirecao();
}

function desativarBotoes() {
  teclasPressionadas.clear();
  atualizarDirecao();
}

["btn-up", "btn-down", "btn-left", "btn-right"].forEach(id => {
  const btn = document.getElementById(id);
  const direcao = id.split("-")[1];

  btn.addEventListener("touchstart", () => ativarBotao(direcao));
  btn.addEventListener("touchend", desativarBotoes);
  btn.addEventListener("mousedown", () => ativarBotao(direcao));
  btn.addEventListener("mouseup", desativarBotoes);
  btn.addEventListener("mouseleave", desativarBotoes);
  btn.addEventListener("touchcancel", desativarBotoes);
});

// Inicializa
desenhar();
requestAnimationFrame(loop);