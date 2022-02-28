function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO!] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.getElementById('foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', '../img/menino.jpg')
      } else if (idade < 21) {
        //homem jovem
        img.setAttribute('src', '../img/jhomem.jpg')
      } else if (idade < 60) {
        // homem adulto
        img.setAttribute('src', '../img/adulto.jpg')
      } else {
        // homem idoso
        img.setAttribute('src', '../img/velho.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', '../img/menina.jpg')
      } else if (idade >= 10 && idade < 21) {
        //jovem mulher
        img.setAttribute('src', '../img/jmulher.jpg')
      } else if (idade >= 21 && idade < 60) {
        // mulher adulta
        img.setAttribute('src', '../img/adulta.jpg')
      } else {
        // mulher idosa
        img.setAttribute('src', '../img/velha.jpg')
      }
    }
    msg.innerHTML = `Detectamos ${genero} com ${idade} anos!`
  }
}
