document.getElementById('btn-donate-now').addEventListener('click',function(event){
  event.preventDefault();

  console.log('Donate Now btn clicked');
  const addMoney = document.getElementById('current-donate-money').value;
  const addMoneyNumber = parseFloat(addMoney);
  

  const balance = document.getElementById('primary-money').innerText;
  const balanceNumber =parseFloat(balance);

  const totalDonatedMoney = document.getElementById('total-donate-money').innerText;
  const totalDonatedMoneyNumber = parseFloat(totalDonatedMoney); 


  const newTotalDonatedMoney = totalDonatedMoneyNumber + addMoneyNumber ;


  console.log(addMoneyNumber,balanceNumber,totalDonatedMoneyNumber,newTotalDonatedMoney);
  document.getElementById('total-donate-money').innerText = newTotalDonatedMoney+ ' BDT';

  const primaryMoneyNow = balanceNumber - addMoneyNumber  ;

  document.getElementById('primary-money').innerText = primaryMoneyNow + ' BDT';

})


/*
 const addMoney =    
 getInputFieldValueById('input-add-money');
 

 const pinNumber =getInputFieldValueById('input-pin-number');
 console.log(addMoney,pinNumber);

 if(pinNumber===1)
 {
    const balance =getTextValueById('account-balance');
    const totalBalance = addMoney + balance;
    console.log(totalBalance);

     document.getElementById('account-balance').innerText=totalBalance; 
*/