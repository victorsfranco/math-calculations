function calculoBhaskara() {
  var a = document.getElementById('aValue').value
  var b = document.getElementById('bValue').value
  var c = document.getElementById('cValue').value
  var deltaResult = b ** 2 - 4 * a * c
  var x1 = b * -1 + (Math.sqrt(deltaResult) / 2) * a
  var x2 = b * -1 - (Math.sqrt(deltaResult) / 2) * a
  document.getElementById('deltaCalc').innerHTML = `${deltaResult}`
  document.getElementById('x1result').innerHTML = `${x1}`
  document.getElementById('x2result').innerHTML = `${x2}`
}
