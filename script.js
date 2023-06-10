function calculateTip() {
    const bill = parseInt(document.getElementById("bill").value);
    let tipPercent;
  
    if (document.getElementById("percent1").checked) {
      tipPercent = 0.05;
    } else if (document.getElementById("percent2").checked) {
      tipPercent = 0.1;
    } else if (document.getElementById("percent3").checked) {
      tipPercent = 0.15;
    } else if (document.getElementById("percent4").checked) {
      tipPercent = 0.25;
    } else if (document.getElementById("percent5").checked) {
      tipPercent = 0.5;
    } else {
      const customPercent = parseInt(document.getElementById("percent6").value);
      tipPercent = customPercent / 100;
    }
  
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

  calculateTip();

  
  

  
