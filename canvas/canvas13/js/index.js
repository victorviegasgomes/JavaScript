const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const personagem = new Image()
personagem.src = "personagem.png"

const jogador = {
  cutX: 0,
  cutY: 0,
  x: 100,
  y: 100,
  width: 80,
  height: 80,
  velocidade: 4,
  direcao: {x: 0,y: 0}
}

function desenhaPersonagem() {
  const larg = personagem.width / 4
  const alt = personagem.height /4
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(personagem,
  jogador.cutX,
  jogador.cutY,
  larg,
  alt,
  jogador.x,
  jogador.y,
  jogador.width,
  jogador.height)
}

function actualizarPosicao() {
  jogador.x += jogador.direcao.x * jogador.velocidade
  jogador.y += jogador.direcao.y * jogador.velocidade
  
  if(jogador.x === canvas.width - jogador.width)
    jogador.direcao.x = 0
  if(jogador.x === 0)
    jogador.direcao.x = 0
  if(jogador.y === canvas.height - jogador.height)
    jogador.direcao.y = 0
  if(jogador.y === 0)
    jogador.direcao.y = 0
}

function loop() {
  actualizarPosicao()
  desenhaPersonagem()
  requestAnimationFrame(loop)
}

function mover(direcao) {
  if(direcao === "up")
    jogador.direcao.y = -1
  if(direcao === "down")
    jogador.direcao.y = 1
  if(direcao === "left")
    jogador.direcao.x = -1
  if(direcao === "right")
    jogador.direcao.x = 1
  
}

function parar() {
  jogador.direcao.x = 0
  jogador.direcao.y = 0
}

["btn-up", "btn-down", "btn-left", "btn-right"].forEach(id => {
  const btn = document.getElementById(id)
  const direcao = id.split("-")[1]
  
  btn.addEventListener("touchstart", (evento) => {
    evento.preventDefault()
    mover(direcao)
  })
  btn.addEventListener("touchend", parar)
  btn.addEventListener("touchcancel", parar)
})

personagem.onload = () => {
  desenhaPersonagem()
  requestAnimationFrame(loop)
}