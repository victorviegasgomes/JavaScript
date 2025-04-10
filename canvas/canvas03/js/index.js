function desenhar() {
  let canvas = document.getElementById('canvas1')
  let context = canvas.getContext('2d')
  context.moveTo(0, 0) //define onde a linha vai começar
  context.lineTo(200, 200) //define onde a linha vai parar
  context.lineTo(350, 200)
  context.lineTo(350, 100)
  context.moveTo(200, 200)
  context.lineTo(0, 400)
  context.stroke() //desenha as linhas
}