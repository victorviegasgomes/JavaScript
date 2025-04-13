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

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = quadrado.cor;
  ctx.fillRect(quadrado.x, quadrado.y, quadrado.tamanho, quadrado.tamanho);
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

function ativar(direcao) {
  if (direcao === "up") {
    quadrado.direcao.x = 0;
    quadrado.direcao.y = -1;
  }
  if (direcao === "down") {
    quadrado.direcao.x = 0;
    quadrado.direcao.y = 1;
  }
  if (direcao === "left") {
    quadrado.direcao.x = -1;
    quadrado.direcao.y = 0;
  }
  if (direcao === "right") {
    quadrado.direcao.x = 1;
    quadrado.direcao.y = 0;
  }
}

function parar() {
  quadrado.direcao.x = 0;
  quadrado.direcao.y = 0;
}

["btn-up", "btn-down", "btn-left", "btn-right"].forEach(id => {
  const btn = document.getElementById(id);
  const direcao = id.split("-")[1];
  btn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // evita zoom e scroll
    ativar(direcao);
  });

  btn.addEventListener("touchend", parar);
  btn.addEventListener("touchcancel", parar);
});

desenhar();
requestAnimationFrame(loop);