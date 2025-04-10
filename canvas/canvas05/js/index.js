let x = 0
let animacao
let posicao = 1
let tamanhoQuadrado = 40
function desenhar() {
  let canvas = document.getElementById('can')
  let context = canvas.getContext('2d')
  context.clearRect(0, 0, 400, 400)
  context.fillStyle = "#f00"
  context.fillRect(x, 10, tamanhoQuadrado, tamanhoQuadrado)
  x += posicao
  if(x >= 400 - tamanhoQuadrado) {
    posicao = -1
  }
  if(x <= 0) {
    posicao = 1
  }
  animacao = requestAnimationFrame(desenhar)
}