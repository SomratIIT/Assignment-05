document.getElementById('donation-button').addEventListener('click',function(){
   showSectionById('donation-form')
});
document.getElementById('history-button').addEventListener('click',function(){
    console.log('History  btn clicked');
    showSectionById('transaction-form')
});