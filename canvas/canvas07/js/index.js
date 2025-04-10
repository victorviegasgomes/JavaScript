function desenhar() {
  let canvas = document.getElementById('can')
  let context = canvas.getContext('2d')
  /*
    parametros para desenhar um arco:
    arc(eixo x, eixo y, raio, angulo inicial, angulo final, sentido)
    pada sentido horário true para sentido anti-horário false
    o angulo por padrão ele é medido em radianos, para converter para graus usa-se a fórmula:
    (pi/100)*angulo
  */
  context.fillStyle = "#000"
  context.arc(100, 100, 100, (Math.PI/100)*0, (Math.PI/100)*360, false)
  context.fill()
  context.beginPath()
  context.fillStyle = "#f00"
  context.arc(100, 100, 100, (Math.PI/100)*0, (Math.PI/100)*90, false)
  context.fill()
}