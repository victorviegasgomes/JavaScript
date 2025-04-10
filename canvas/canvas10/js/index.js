function desenhar() {
  let canvas = document.getElementById("desenho")
  let context = canvas.getContext("2d")
  
  let imagem = new Image()
  imagem.src = "cores.png"
  imagem.addEventListener("load", function() {
    context.drawImage(imagem, 100, 0, 50, 50, 200 - 25, 200- 25, 50, 50)
  })
}