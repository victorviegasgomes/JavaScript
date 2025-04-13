const canvas = document.getElementById("desenho")
const context = canvas.getContext("2d")

const personagem = new Image()
personagem.src = "personagem.png"

const spriteWidth = personagem.width / 4
const spriteHeight = personagem.height / 4

const sprite = {
  cutX: 0,
  cutY: 0,
  cutWidth: spriteWidth,
  cutHeight: spriteHeight,
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  direcao: {x: 0, y: 0},
  velocidade: 2
}

function desenhar() {
  personagem.onload = () => {
    reDesenhar()
    context.drawImage(personagem, sprite.cutX, sprite.cutY, sprite.cutWidth, sprite.cutHeight, sprite.x, sprite.y, sprite.width, sprite.height)
  }
}

function reDesenhar() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  //desenhar()
}

function actualizarPosicao() {
  sprite.x += sprite.direcao.x * sprite.velocidade
  sprite.y += sprite.direcao.y * sprite.velocidade
}

function animacao() {
  actualizarPosicao()
  desenhar()
  requestAnimationFrame(animacao)
}

function mover(direcao) {
  if(direcao === "up") {
    sprite.direcao.x = 0 
    sprite.direcao.y = -1
  }
  if(direcao === "down") {
    sprite.direcao.x = 0 
    sprite.direcao.y = 1
  }
  if(direcao === "left") {
    sprite.direcao.x = -1
    sprite.direcao.y = 0
  }
  if(direcao === "right") {
    sprite.direcao.x = 1 
    sprite.direcao.y = 0
  }
}

function parar() {
  sprite.direcao.x = 0
  sprite.direcao.y = 0
}

["btn-up", "btn-down", "btn-left", "btn-right"].forEach(id => {
  const btn = document.getElementById(id)
  const direcao = id.split("-")[1]
  
  btn.addEventListener("touchstart", (event) => {
    event.preventDefault()
    mover(direcao)
  })
  btn.addEventListener("touchend", parar)
  btn.addEventListener("touchcancel", parar)
})

console.log(sprite.x)
desenhar()
requestAnimationFrame(animacao)