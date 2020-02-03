//Listen for Submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate Results
function calculateResults(e){
//  console.log('calculating')
//UI Variables
const amount = document.getElementById('amount');
const interest = document.getElementById('interst');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal =parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

//Compute monthly Payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly =(principla*x*calculatedInterest)/(x-1);

  e.preventDefault();
}