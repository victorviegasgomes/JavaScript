function quadrado() {
  let canvas = document.getElementById('canvas1')
  let context = canvas.getContext('2d')
  context.fillStyle = "#00f"
  context.fillRect(0, 0, 50, 50)
  for(let i = 0; i < 500; i++) {
    context.fillStyle = "#00f"
    context.fillRect(i, i, 50, 50)
  }
  for(let c = 500; c > 0; c--) {
    context.fillStyle = "#f00"
    context.fillRect(c, c, 50, 50)
  }
}