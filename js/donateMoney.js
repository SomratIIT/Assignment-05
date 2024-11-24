document.getElementById('btn-donate-now').addEventListener('click',function(event){
  event.preventDefault();

  console.log('Donate Now btn clicked');
  const addMoney = document.getElementById('current-donate-money').value;
  const addMoneyNumber = parseFloat(addMoney);
  

  const balance = document.getElementById('primary-money').innerText;
  const balanceNumber =parseFloat(balance);

  const totalDonatedMoney = document.getElementById('total-donate-money').innerText;
  const totalDonatedMoneyNumber = parseFloat(totalDonatedMoney); 

  if (isNaN(addMoney) || addMoney <= 0) {
    alert("Please enter a valid donation amount.");
    return;
}
  const newTotalDonatedMoney = totalDonatedMoneyNumber + addMoneyNumber ;


  console.log(addMoneyNumber,balanceNumber,totalDonatedMoneyNumber,newTotalDonatedMoney);
  document.getElementById('total-donate-money').innerText = newTotalDonatedMoney+ ' BDT';

  const primaryMoneyNow = balanceNumber - addMoneyNumber  ;

  document.getElementById('primary-money').innerText = primaryMoneyNow + ' BDT';



  const p = document.createElement('p');
                      p.innerText = `Donated: ${addMoneyNumber} Taka is Donated for famine-2024 at Feni, Bangladesh New_Balance: ${primaryMoneyNow}`;
                      console.log(p.innerText);

                      p.classList.add(
                        'border',
                        'border-green-500',     
                        'text-xl',
                        'font-bold',  
                        'p-4', 
                        'mb-4', 
                        'w-2/3',
                        'text-green-700',
                       
                        'mx-auto' ,
                        'rounded-xl'
                      );

document.getElementById('transaction-form').appendChild(p);
})
