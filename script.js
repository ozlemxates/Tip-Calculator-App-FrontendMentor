let tipPercent;

function getPercent(value, buttonElement) {
  tipPercent = value ? value : parseInt(document.getElementById("percent6").value) / 100;
  
  // const allButtons = document.querySelectorAll('.button');
  // allButtons.forEach(button => button.classList.remove('clickedButton'));
  
  // if (buttonElement) {
  //     buttonElement.classList.add('clickedButton');
  // }
}


function calculateTip() {
  let bill = parseInt(document.getElementById("bill").value);
  let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
  const tip = bill * tipPercent;
  const tipPerPerson = tip / numberOfPeople;
  const total = (tip + bill) / numberOfPeople;

  document.getElementById('tipAmount').innerHTML = isNaN(tipPerPerson) ? '$0.00' : '$' + tipPerPerson.toFixed(2);
  document.getElementById('tipPerPerson').innerHTML = isNaN(total) ? '$0.00' : '$' + total.toFixed(2);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculateTip();
  }
});
