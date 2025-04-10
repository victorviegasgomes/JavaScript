let x = 0
let animacao
let posicao = 1
let tamanoQuadrado = 30
let y = 10
function desenhar() {
  let canvas = document.getElementById('can')
  let context = canvas.getContext('2d')
  context.clearRect(0, 0, 400, 400)
  context.fillStyle = "#00f"
  context.fillRect(x, y, tamanoQuadrado, tamanoQuadrado)
  context.lineWidth = 1
  context.strokeStyle = "#000"
  context.strokeRect(x, y, tamanoQuadrado, tamanoQuadrado)
  x += posicao
  if(x >= 400 - tamanoQuadrado) {
    posicao = -1
  }
  if(x <= 0) {
    posicao = 1
  }
  animacao = requestAnimationFrame(desenhar)
}