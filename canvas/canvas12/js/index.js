const canvas = document.getElementById("desenho")
const context = canvas.getContext("2d")

const quadrado = {
  x: 175,
  y: 175,
  tamanho: 50,
  cor: "f0f"
}

const velocidade = 10
let intervalo

//desenha um quadrado
function desenhar() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = quadrado.cor
  context.fillRect(quadrado.x, quadrado.y, quadrado.tamanho, quadrado.tamanho)
}

//verifica qual botã foi precionado
function movimento(direcao) {
  if(direcao === "cima")
    quadrado.y -= velocidade
  if(direcao === "baixo")
    quadrado.y += velocidade
  if(direcao === "esquerda")
    quadrado.x -= velocidade
  if(direcao === "direita")
    quadrado.x += velocidade
  desenhar()
} 

function comecarMovimento(direcao) {
  if(intervalo) clearInterval(intervalo)
  movimento(direcao)
  intervalo = setInterval(() => movimento(direcao), 50)
}

function pararMovimento() {
  clearInterval(intervalo)
  intervalo = null
}

["btn-cima", "btn-baixo", "btn-esquerda", "btn-direita"].forEach(id => {
  const botao = document.getElementById(id)
  const direcao = id.split("-")[1]
  
  botao.addEventListener("touchstart", () => comecarMovimento(direcao))
  botao.addEventListener("touchend", pararMovimento)
  botao.addEventListener("touchcancel", pararMovimento)
})

desenhar()