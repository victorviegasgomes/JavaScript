//fazer um circulo de voltas ao canvas enquanto se desenha e apaga
let x = y = 25
let raio = 25
let pi = Math.PI/100
let animacao
let posicaoX = 1
let posicaoY = 0
let grauInicial = grauFinal = 0
let resetGrau = 1
let tamanhoCanvas = 400
let sentido = false

function desenhar() {
  let canvas = document.getElementById("desenho")
  let context = canvas.getContext("2d")
  context.clearRect(0, 0, 400, 400)
  
  context.beginPath()
  context.fillStyle = "#000"
  context.arc(x, y, raio, pi*grauInicial, pi*grauFinal, true)
  context.fill()
  
  grauFinal += resetGrau
  
  x += posicaoX
  y += posicaoY
  if((x === 25) && (y === 25)) {
    posicaoX = 1
    posicaoY = 0
  }
  if((x >= tamanhoCanvas - raio) && (y === 25)) {
    posicaoY = 1 
    posicaoX = 0
  }
  if((x >= tamanhoCanvas - raio) && (y >= tamanhoCanvas - raio)) {
    posicaoX = -1
    posicaoY = 0
  }
  if((x <= 0 + raio) && (y === tamanhoCanvas - raio)) {
    posicaoX = 0 
    posicaoY = -1
  }
  animacao = requestAnimationFrame(desenhar)
}