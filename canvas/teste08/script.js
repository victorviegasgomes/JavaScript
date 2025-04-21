const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imagem = new Image();
imagem.src = "personagem.png"; // substitua por sua imagem

const posicao = { x: 100, y: 100 };
const velocidade = 2;
const direcao = { x: 0, y: 0 };

function desenharImagem() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imagem, posicao.x, posicao.y, 80, 80); // Tamanho da imagem
}

function atualizarPosicao() {
  posicao.x += direcao.x * velocidade;
  posicao.y += direcao.y * velocidade;
}

function loop() {
  atualizarPosicao();
  desenharImagem();
  requestAnimationFrame(loop);
}

function mover(d) {
  direcao.x = 0;
  direcao.y = 0;
  if (d === "up") direcao.y = -1;
  if (d === "down") direcao.y = 1;
  if (d === "left") direcao.x = -1;
  if (d === "right") direcao.x = 1;
}

function parar() {
  direcao.x = 0;
  direcao.y = 0;
}

["btn-up", "btn-down", "btn-left", "btn-right"].forEach(id => {
  const btn = document.getElementById(id);
  const direcaoBtn = id.split("-")[1];

  btn.addEventListener("touchstart", e => {
    e.preventDefault();
    mover(direcaoBtn);
  });
  btn.addEventListener("touchend", parar);
  btn.addEventListener("touchcancel", parar);
});

imagem.onload = () => {
  desenharImagem();
  requestAnimationFrame(loop);
};