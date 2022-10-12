window.onload = update()

function update() {
   var select = document.getElementById('calcSelection')
   switch (select.value) {
      case '1':
         document.getElementById('mainContent').innerHTML = `
      <div id="bhaskaraInitialValues">
         <h5 class="subtitle">Informe abaixo os valores iniciais:</h5>

         <div class="inputValues">
            <p>A:</p>
            <input placeholder= "A..." type="number" class="valueBox"    id="aValue" />
         </div>

         <div class="inputValues">
            <p>B:</p>
            <input placeholder="B..." type="number" class="valueBox" id="bValue" />
         </div>

         <div class="inputValues">
            <p>C:</p>
            <input placeholder="C..." type="number" class="valueBox" id="cValue" />
         </div>
         <button onclick="bhaskaraCalculation()" id="calcButton">Calcular</button>
      </div>
  
      <div id="delta">
         <h5 class="subtitle">Valor de Delta:</h5>
         <div class="box">
            <p id="deltaCalc"></p>
         </div>
      </div>
  
        <div id="deltaShow"></div>
       
        <button onclick="refresh()" id="refreshButton">Reniciar</button>
    `

         break
      case '2':
         document.getElementById('mainContent').innerHTML = `
      <h5>
      Informe os valores iniciais para que o valor desejado seja encontrado:
    </h5>
    <div>
      <input type="number" id="n1" />
      <p>Está para</p>
      <input type="number" id="n2" />
      <p>Bem como</p>
      <input type="number" id="n3" />
      <p>Está para</p>
      <button onclick="ruleOfThree()">Calcular</button>
      <div class="box" id="ruleOfThreeResult"></div>
    </div>
      `
   }
}

function bhaskaraCalculation() {
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

function ruleOfThree() {
   n1 = document.getElementById('n1').value
   n2 = document.getElementById('n2').value
   n3 = document.getElementById('n3').value
   result = (n2 * n3) / n1
   document.getElementById('ruleOfThreeResult').innerHTML = `
  ${result}
  `
}

/*
Para DELTA > 0 : a == x / b == x / c == x
Para DELTA = 0 : a == 4 / b == -4 / c == 1
Para DELTA < 0 : a == 5 / b == 6 / c == 7
*/
