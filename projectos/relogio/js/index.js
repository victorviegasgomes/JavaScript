
function mostrarTempo() {
  const hoje = new Date()
  let hora = hoje.getHours()
  let minuto = hoje.getMinutes()
  let segundos = hoje.getSeconds()
  let actualizacao = null
  let hr = document.querySelector("p#campoHoras")
  let min = document.querySelector("p#campoMinutos")
  let seg = document.querySelector("p#campoSegundos")
  
  if(hora < 10) 
    hr.innerHTML = "0"+hora
  else
    hr.innerHTML = `${hora}`
  
  if(minuto < 10) 
    min.innerHTML = "0"+hora
  else
    min.innerHTML = `${minuto}`
    
  if(segundos < 10) 
    seg.innerHTML = "0"+segundos
  else
    seg.innerHTML = `${segundos}`

  actualizacao = requestAnimationFrame(mostrarTempo)
}