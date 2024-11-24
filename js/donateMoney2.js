document.getElementById('btn-donate-now-feni').addEventListener('click',function(event){
    event.preventDefault();

const addMoneyF = getInputFieldValueById('current-donate-money-feni');

console.log(addMoneyF);

const balanceNumber =  getTextValueById('primary-money');
const totalDonatedMoneyF = getTextValueById('total-donate-money-feni');
if (isNaN(addMoneyF) || addMoneyF <= 0) {
    alert("Please enter a valid donation amount.");
    return;
}

const newTotalDonatedMoneyF = totalDonatedMoneyF + addMoneyF ;

document.getElementById('total-donate-money-feni').innerText = newTotalDonatedMoneyF+ ' BDT';

const primaryMoneyNow = balanceNumber - addMoneyF  ;

document.getElementById('primary-money').innerText = primaryMoneyNow + ' BDT';

const p = document.createElement('p');
p.innerText = `Donated: ${addMoneyF} Taka is Donated 6500 Taka is Donated for Flood Relief in Feni,Bangladesh New_Balance: ${primaryMoneyNow}`;
console.log(p.innerText);



document.getElementById('transaction-form').appendChild(p);

})


document.getElementById('btn-donate-now-q').addEventListener('click', function(event) {
    event.preventDefault();

    const addMoneyQ = getInputFieldValueById('current-donate-money-q');
    

    const balanceNumberQ = getTextValueById('primary-money');
    const totalDonatedMoneyQ = getTextValueById('total-donate-money-q');
    
    if (isNaN(addMoneyQ) || addMoneyQ <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    const newTotalDonatedMoneyQ = totalDonatedMoneyQ + addMoneyQ;
    document.getElementById('total-donate-money-q').innerText = newTotalDonatedMoneyQ + ' BDT';

    const primaryMoneyNowQ = balanceNumberQ - addMoneyQ;
    document.getElementById('primary-money').innerText = primaryMoneyNowQ + ' BDT';

    const p = document.createElement('p');
    p.innerText = `Donated: ${addMoneyQ} Taka is Donated 15500 Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh New_Balance: ${primaryMoneyNow}`;
    console.log(p.innerText);



document.getElementById('transaction-form').appendChild(p);
});

