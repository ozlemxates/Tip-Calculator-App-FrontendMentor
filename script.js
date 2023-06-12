function calculateTip() {
  const bill = parseInt(document.getElementById("bill").value);
  let tipPercent;
  
  document.getElementById("percent1").addEventListener("click", function() {
    tipPercent = 0.05;
  });
  document.getElementById("percent2").addEventListener("click", function() {
    tipPercent = 0.1;
  });
  document.getElementById("percent3").addEventListener("click", function() {
    tipPercent = 0.15;
  });
  document.getElementById("percent4").addEventListener("click", function() {
    tipPercent = 0.25;
  });
  document.getElementById("percent5").addEventListener("click", function() {
    tipPercent = 0.5;
  });
  const customPercent = parseInt(document.getElementById("percent6").value);
  document.getElementById("percent6").addEventListener("click", function() {
    tipPercent = customPercent / 100;
  });

  console.log("which percent", tipPercent)

  const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
  const tip = bill * tipPercent;
  const tipPerPerson = (tip+bill) / numberOfPeople;

  document.getElementById('tipAmount').innerHTML = isNaN(tip) ? '$0.00' : '$' + tip.toFixed(2);
  document.getElementById('tipPerPerson').innerHTML = isNaN(tipPerPerson) ? '$0.00' : '$' + tipPerPerson.toFixed(2);
}

const buttons = document.getElementsByClassName('button');
const input = document.getElementById('percent6');
let lastClickedButton = null;

const handleClick = function() {
  if (lastClickedButton !== null) {
    lastClickedButton.classList.remove('clicked');
  }
  
  this.classList.add('clicked');
  lastClickedButton = this;
  
  input.value = this.innerText;
  input.classList.add('inputClicked');
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleClick);
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculateTip();
  }
});
  
