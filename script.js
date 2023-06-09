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
    const tipPerPerson = tip / numberOfPeople;
  
    
    document.getElementById('tipAmount').innerHTML = tip || '$0,00';
    document.getElementById('tipPerPerson').innerHTML = tipPerPerson || '$0,00';
  }

  const buttons = document.getElementsByClassName('button');
  const input = document.getElementById('percent6');
  let lastClickedButton = null;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      if (lastClickedButton !== null) {
        lastClickedButton.classList.remove('clicked');
      }
      this.classList.add('clicked');
      lastClickedButton = this;
      input.value ="";
      input.value = this.innerText;
      input.classList.add('inputClicked');
    });
  }


  calculateTip()
  
