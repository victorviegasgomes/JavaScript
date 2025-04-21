const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const personagem = new Image()
personagem.src = "personagem.png"

let animacao = null

const sprite = {
  cutX: 0,
  cutY: 0,
  x: 200,
  y: 200,
  width: 50,
  height: 50,
  velocidade: 5,
  direcao: {x: 0, y: 0},
  index: 0
}

function desenhar() {
  const spriteWidth = personagem.width / 4
  const spriteHeight = personagem.height / 4
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.drawImage(personagem,
  sprite.cutX,
  sprite.cutY,
  spriteWidth,
  spriteHeight,
  sprite.x,
  sprite.y,
  sprite.width,
  sprite.height)
}

function posicao() {
  sprite.x += sprite.direcao.x * sprite.velocidade
  sprite.y += sprite.direcao.y * sprite.velocidade
}

function parar() {
  sprite.direcao.x = 0
  sprite.direcao.y = 0
}

function actualizar() {
  posicao()
  desenhar()
  requestAnimationFrame(actualizar)
}

function mover(direcao) {
  if(direcao === "up")
    sprite.direcao.y = -1
  if(direcao === "down")
    sprite.direcao.y = 1
  if(direcao === "left")
    sprite.direcao.x = -1
  if(direcao === "right")
    sprite.direcao.x = 1
  
}

["up", "left", "down", "right"].forEach(id => {
  const botao = document.getElementById(id)
  const direcao = id
  
  botao.addEventListener("touchstart", (evento) => {
    evento.preventDefault()
    mover(direcao)
  })
  botao.addEventListener("touchend", parar)
  botao.addEventListener("touchcancel", parar)
})

personagem.onload = () => {
  desenhar()
  requestAnimationFrame(actualizar)
}