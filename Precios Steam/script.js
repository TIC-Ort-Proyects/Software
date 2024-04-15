const api = "https://api.exchangerate-api.com/v4/latest/usd";
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'ARS'
});

var PrecioEnDolaresInput = document.getElementById("PrecioEnDolares");
var Resultado = document.getElementById("PrecioEnPesos");
document.addEventListener("DOMContentLoaded", convert);
function convert() {
  PrecioEnDolaresInput.addEventListener("input", function() {
    var PrecioEnDolares = parseFloat(PrecioEnDolaresInput.value);
    fetch(api)
      .then(currency => {
        return currency.json();
      })
      .then(data => {
        console.clear();
        console.log("Precio En Dolares " + PrecioEnDolares);
        let valorDelDolar = data.rates.ARS;
        console.log("Valor Del Dolar " + valorDelDolar);
        let PrecioEnPesos = PrecioEnDolares * 1.6 * valorDelDolar;
        console.log("Precio En Pesos: " + PrecioEnPesos);
        Resultado.innerHTML = PrecioEnPesos.toFixed(2);
      });
});
};