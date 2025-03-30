

function carregar(){
								var msg = document.getElementById('msg')
								var imagem = document.getElementById('imagem')
								var data = new Date()
								var hora = data.getHours()
								
								msg.innerHTML = `são ${hora} horas`
								
								if(hora >= 0 && hora < 12){
																//bom dia
																imagem.style.backgroundImage = "url('imagens/manha.png')"
																imagem.style.backgroundSize = "cover"
								}else if(hora >= 12 && hora < 18){
																//boa tarde
																imagem.style.backgroundImage = "url('imagens/tarde.png')"
																imagem.style.backgroundSize = "cover"
								}else{
																//boa noite
																imagem.style.backgroundImage = "url('imagens/noite.png')"
																imagem.style.backgroundSize = "cover"
								}
}

