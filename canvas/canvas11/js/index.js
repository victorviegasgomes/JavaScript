function desenhar() {
  let canvas = document.getElementById("desenho")
  let context = canvas.getContext("2d")
  
  let inicioCorte = 0
  let fimCorte = 0
  let larguraCorte
  let larguraSprite = 0
  let numeroSprite = 4
  let indexSprite = 0
  
  let imagem = new Image()
  imagem.src = "cores.png"
  imagem.addEventListener("load", ()=> {
    larguraCorte = imagem.width //obtem a largura da imagem
    
    larguraSprite = larguraCorte/numeroSprite
    
    inicioCorte = larguraSprite*indexSprite
    
    context.drawImage(imagem, inicioCorte, fimCorte, larguraSprite, 50, 0, 0, 200, 200)
  })
  
  let animacao = setInterval(()=> {
    indexSprite++
    if(indexSprite > 3)
      indexSprite = 0
    inicioCorte = larguraSprite*indexSprite
    context.drawImage(imagem, inicioCorte, fimCorte, larguraSprite, 50, 0, 0, 200, 200)
  },1000)
}