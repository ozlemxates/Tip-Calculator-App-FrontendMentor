let tipPercent;

function getPercent(value, buttonElement) {
  tipPercent = value ? value : parseInt(document.getElementById("percent6").value) / 100;
  calculateTip();
}

function calculateTip() {
  let bill = parseFloat(document.getElementById("bill").value);
  let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);

  if (bill <= 0) {
    document.getElementById("billContainer").classList.add("errorState");
  } else {
    document.getElementById("billContainer").classList.remove("errorState");
  }

  if (numberOfPeople <= 0) {
    document.getElementById("numContainer").classList.add("errorState");
  } else {
    document.getElementById("numContainer").classList.remove("errorState");
  }

  if (tipPercent <= 0) {
    document.getElementById("percent6").classList.add("errorState");
  } else {
    document.getElementById("percent6").classList.remove("errorState");
  }
  
  const tip = bill * tipPercent;
  const tipPerPerson = tip / numberOfPeople;
  const total = (tip + bill) / numberOfPeople;

  if (document.querySelectorAll(".errorState").length > 0) {
    document.getElementById("tipAmount").innerHTML = '$0.00';
    document.getElementById("tipPerPerson").innerHTML = '$0.00';
  } else {
    document.getElementById("tipAmount").innerHTML = '$' + tipPerPerson.toFixed(2);
    document.getElementById("tipPerPerson").innerHTML = '$' + total.toFixed(2);
  }
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

function clearAll() {
  document.getElementById("bill").value = "";
  document.getElementById("numberOfPeople").value = "";
  document.getElementById("percent6").value = "";
  document.getElementById('tipAmount').innerHTML = '$0.00';
  document.getElementById('tipPerPerson').innerHTML = '$0.00';
}