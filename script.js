// DOM declaration
let amount = document.querySelector('#amount');
let from = document.querySelector('#from');
let to = document.querySelector('#to');
let button = document.querySelector('#button');
let fromCountry = document.querySelector('#fromAmount')
let toCountry = document.querySelector('#toAmount')
let exchangeRate = document.querySelector('#exchangeRate')
let swap = document.querySelector('#swap')
// API
let APIrates = "http://data.fixer.io/api/latest?access_key=b6f803376ec7bfd0fbef41985ec34c2d"




fetch(APIrates)
.then((response) => response.json())
.then((result) => {
     
    show(result);
});

function show(result) {
  const asArray = Object.entries(result.rates);
  for (let i=0; i<asArray.length; i++){
    
    from.innerHTML += `<option value="${asArray[i][1]}">${asArray[i][0]}</option>`;
    to.innerHTML += `<option value="${asArray[i][1]}">${asArray[i][0]}</option>`;

}};




button.addEventListener('click', () => {
  let fromValue = from.value;
  let toValue = to.value;
  let value = amount.value;
  
  if (fromValue != toValue){
    convert(fromValue, toValue, value);
  }else{
    alert("Please choose a different currency")
  }});

  function convert(fromValue, toValue, value){
    let chosenCurrencyFrom = from.options[from.selectedIndex].text;
    let chosenCurrencyTo = from.options[to.selectedIndex].text;
    exchangeRate.innerHTML = `${value} ${chosenCurrencyFrom} = ${((toValue / fromValue) * value).toFixed(2)} ${chosenCurrencyTo}`;
    amount.value = '';
};





