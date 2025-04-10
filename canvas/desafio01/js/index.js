let x = y = 0
let tamanhoQuadrado = 40
let tamanhoCanvas = 400
let posicaoX = 1
let posicaoY = 0
let animacao
function desenhar() {
  let canvas = document.getElementById('can')
  let context = canvas.getContext('2d')
  
  context.clearRect(0, 0, tamanhoCanvas, tamanhoCanvas)
  
  context.fillStyle = "#0f0"
  context.fillRect(x, y, tamanhoQuadrado, tamanhoQuadrado)
  
  x += posicaoX
  y += posicaoY
  
  if(x >= tamanhoCanvas - tamanhoQuadrado) {
    posicaoX = 0
    posicaoY = 1
  }
  
  if(y >= tamanhoCanvas - tamanhoQuadrado) {
    posicaoY = 0
    posicaoX = -1
  }
  
  if(x <= 0) {
    posicaoX = 0
    posicaoY = -1
  }
  
  if(x == 0 && y == 0) {
    posicaoX = 1
    posicaoY = 0
  }
  animacao = requestAnimationFrame(desenhar)
}