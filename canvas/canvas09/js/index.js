
function desenhar() {
  let canvas = document.getElementById("desenho")
  let context = canvas.getContext("2d")
  context.moveTo(0, 0)
  context.lineTo(100, 100)
  context.arcTo(200, 200, 400, 0, 50)
  context.lineTo(400, 0)
  context.stroke()
}