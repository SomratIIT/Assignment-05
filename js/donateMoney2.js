document.getElementById('btn-donate-now-feni').addEventListener('click',function(event){
    event.preventDefault();

const addMoneyF = getInputFieldValueById('current-donate-money-feni');

console.log(addMoneyF);

const balanceNumber =  getTextValueById('primary-money');
const totalDonatedMoneyF = getTextValueById('total-donate-money-feni');


const newTotalDonatedMoneyF = totalDonatedMoneyF + addMoneyF ;

document.getElementById('total-donate-money-feni').innerText = newTotalDonatedMoneyF+ ' BDT';

const primaryMoneyNow = balanceNumber - addMoneyF  ;

document.getElementById('primary-money').innerText = primaryMoneyNow + ' BDT';
})


// Quota Movement