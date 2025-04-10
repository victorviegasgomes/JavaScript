let x = 0
let animacao
function desenhar() {
  let canvas = document.getElementById('can')
  let context = canvas.getContext('2d')
  context.clearRect(0, 0, 400, 400)
  context.fillRect(x, 0, 30, 30)
  x++
  animacao = requestAnimationFrame(desenhar)
}