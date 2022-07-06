function calculoBhaskara() {
  var a = document.getElementById('aValue').value
  var b = document.getElementById('bValue').value
  var c = document.getElementById('cValue').value
  var deltaResult = b ** 2 - 4 * a * c
  var x1 = (b * -1 + Math.sqrt(deltaResult)) / (2 * a)
  var x2 = (b * -1 - Math.sqrt(deltaResult)) / (2 * a)

  if (a == 0) {
    document.getElementById(
      'deltaShow'
    ).innerHTML = `<h4>Valor inválido informado para o parâmetro "A". Este não pode ter seu valor definido como "0".</h4>`
    document.getElementById('deltaCalc').innerHTML = `${deltaResult}`
  } else if (deltaResult > 0) {
    document.getElementById('deltaShow').innerHTML = `
      <div>
        <h5 class="subtitle">Resultado:</h5>
        <p>X' =</p>
        <div class="box">
          <p id="x1result"></p>
        </div>
        <p>X'' =</p>
        <div class="box">
          <p id="x2result"></p>
        </div>
      </div>
      `
    document.getElementById('deltaCalc').innerHTML = `${deltaResult}`
    document.getElementById('x1result').innerHTML = `${x1}`
    document.getElementById('x2result').innerHTML = `${x2}`
  } else if (deltaResult == 0) {
    document.getElementById('deltaShow').innerHTML = `
    <div>
      <h5 class="subtitle">Resultado</h5>
      <p>X = </p>
      <div class="box">
        <p id="result"></p>
      </div>
    </div>
    `
    document.getElementById('deltaCalc').innerHTML = `${deltaResult}`
    document.getElementById('result').innerHTML = `${x1}`
  } else if (deltaResult < 0) {
    document.getElementById(
      'deltaShow'
    ).innerHTML = `<h4>Não Existem resultados reais para os valores informados.</h4>`
    document.getElementById('deltaCalc').innerHTML = `${deltaResult}`
  }
}

function refresh() {
  location.reload()
}

/*
Para DELTA > 0 : a == x / b == x / c == x
Para DELTA = 0 : a == 4 / b == -4 / c == 1
Para DELTA < 0 : a == 5 / b == 6 / c == 7
*/
