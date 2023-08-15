let tipPercent;

function getPercent(value, buttonElement) {
  tipPercent = value ? value : parseInt(document.getElementById("percent6").value) / 100;
  calculateTip();
}

function calculateTip() {
  let bill = parseFloat(document.getElementById("bill").value);
  let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
  
  if (isNaN(bill) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
    document.getElementById('tipAmount').innerHTML = '$0.00';
    document.getElementById('tipPerPerson').innerHTML = '$0.00';
    return;
  }
  
  const tip = bill * tipPercent;
  const tipPerPerson = tip / numberOfPeople;
  const total = (tip + bill) / numberOfPeople;

  document.getElementById('tipAmount').innerHTML = '$' + tipPerPerson.toFixed(2);
  document.getElementById('tipPerPerson').innerHTML = '$' + total.toFixed(2);
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', calculateTip);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculateTip();
  }
});