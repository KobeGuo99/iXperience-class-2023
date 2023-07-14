function onButtonClicked() {
  console.log("Button was clicked");
}

//examine the DOM

let dom;
dom = document;
console.log(dom);
console.log(dom.all);
console.log(dom.all.length);
console.log(dom.all[9]);
// dom.all[9].innerHTML = "Goodbye there"
console.log(dom.forms);

//single element selectors
let button = dom.getElementById("button-1");
console.log(button);

//get things from the element
console.log(button.id);
console.log(button.className);
console.log(button.classList);

//Interest calculator

let loanAmount = document.getElementById("loan-amount");
let interest = document.getElementById("interest");
let years = document.getElementById("years");
let output = document.getElementById("output");

function calculateLoan() {
  if (!isValid()) {
    alert("Fill in all the values");
    return;
  }
  loan = loanAmount.value;
  interestRate = interest.value;
  yearsToRepay = years.value;

  const total = loan * Math.pow(1 + interestRate / 100, yearsToRepay);

  console.log(total);
  output.innerHTML = `You will pay back $ ${total} over ${yearsToRepay} years`;
  resetForm();
}

function isValid() {
  return loanAmount.value !== "" && interest.value !== "" && years.value !== "";
}

function resetForm(){
    loanAmount.value = '';
    interest.value = '';
    years.value = '';
}