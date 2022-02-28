function contar() {
  var num = document.getElementById('num')
  var tabsoma = document.getElementById('tabsoma')
  var tabsubt = document.getElementById('tabsubt')
  var tabmult = document.getElementById('tabmult')
  var tabdivd = document.getElementById('tabdivd')
  if (num.value.length == 0) {
    alert('[ ERROR! ] Por favor insira um número antes de gerar a tabuada.')
  } else {
    var c1 = 1
    var n = Number(num.value)
    tabsoma.innerHTML = ''
    var c1 = 1
    while (c1 <= 10) {
      var item = document.createElement(`option`)
      item.text = `${n} + ${c1} = ${n + c1}`
      item.value = `tab${c1}`
      tabsoma.appendChild(item)
      c1++
    }
    c2 = 1
    tabsubt.innerHTML = ''
    while (c2 <= 10) {
      var item = document.createElement(`option`)
      item.text = `${n + c2} - ${n} = ${(n + c2) - n}`
      item.value = `tab${c2}`
      tabsubt.appendChild(item)
      c2++
    }
    c3 = 1
    tabmult.innerHTML = ''
    while (c3 <= 10) {
      var item = document.createElement(`option`)
      item.text = `${n} x ${c3} = ${n * c3}`
      item.value = `tab${c3}`
      tabmult.appendChild(item)
      c3++
    }
    c4 = 1
    tabdivd.innerHTML = ''
    while (c4 <= 10) {
      var item = document.createElement(`option`)
      item.text = `${n * c4} / ${n} = ${(n * c4) / n}`
      item.value = `tab${c4}`
      tabdivd.appendChild(item)
      c4++
    }
  }
}
