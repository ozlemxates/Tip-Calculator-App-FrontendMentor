function calculateTip() {
  let bill = parseInt(document.getElementById("bill").value);
  console.log(bill);

  let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
  console.log(numberOfPeople);

  const tip = bill * percent;
  const tipPerPerson = tip / numberOfPeople;
  const total = (tip + bill) / numberOfPeople;

  document.getElementById('tipAmount').innerHTML = isNaN(tipPerPerson) ? '$0.00' : '$' + tipPerPerson.toFixed(2);
  document.getElementById('tipPerPerson').innerHTML = isNaN(total) ? '$0.00' : '$' + total.toFixed(2);
} 

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    calculateTip();
  }})


function getPercent(percent) {
 percent ? percent : parseInt(document.getElementById("percent6").value) / 100;
 console.log(percent)
}


// let tipPercent;

// (calculateTip = () => {
//   let bill = parseInt(document.getElementById("#bill"));
//   console.log(bill)
//   let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
//   console.log(numberOfPeople)
//   const tip = bill * tipPercent;
//   const tipPerPerson = tip / numberOfPeople;
//   const total = (tip+bill) / numberOfPeople;

//     document.getElementById('tipAmount').innerHTML = isNaN(tipPerPerson) ? '$0.00' : '$' + tipPerPerson.toFixed(2);
//   document.getElementById('tipPerPerson').innerHTML = isNaN(total) ? '$0.00' : '$' + total.toFixed(2);
// }



// )();

// function getPercent(value) {
//   value ? tipPercent = value : tipPercent = parseInt(document.getElementById("percent6").value) / 100;

// }

// getPercent();



// function calculateTip() {


//   console.log("which percent", tipPercent)

//   const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
//   const tip = bill * tipPercent;
//   const tipPerPerson = (tip+bill) / numberOfPeople;

//   document.getElementById('tipAmount').innerHTML = isNaN(tip) ? '$0.00' : '$' + tip.toFixed(2);
//   document.getElementById('tipPerPerson').innerHTML = isNaN(tipPerPerson) ? '$0.00' : '$' + tipPerPerson.toFixed(2);
// }

// const buttons = document.getElementsByClassName('button');
// const input = document.getElementById('percent6');
// let lastClickedButton = null;

// const handleClick = function() {
//   if (lastClickedButton !== null) {
//     lastClickedButton.classList.remove('clicked');
//   }
  
//   this.classList.add('clicked');
//   lastClickedButton = this;
  
//   input.value = this.innerText;
//   input.classList.add('inputClicked');
// };

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', handleClick);
// }

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//     calculateTip();
//   }
// });
  
