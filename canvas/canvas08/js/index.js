let animacao
let tamanhoCanvas = 400
let pi = Math.PI/100
let anguloInicial = anguloFinal = 0
function desenhar() {
  let canvas = document.getElementById("desenho")
  let context = canvas.getContext("2d")
  
  context.clearRect(0, 0, 400, 400)
  
  for(let i = 0; i < 10; i++) {
    context.beginPath()
    context.fillStyle = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()+")"
    context.arc(Math.random()*tamanhoCanvas, Math.random()*tamanhoCanvas, Math.random()*50, 0, 360, false)
    context.fill()
  }
  context.beginPath()
  context.fillStyle = "#000"
  context.arc(200, 200, 100, pi*anguloInicial, pi*anguloFinal, false)
  context.fill()
  
  anguloFinal++
  animacao = requestAnimationFrame(desenhar)
}