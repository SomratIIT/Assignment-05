// Common Shared Function



function getInputFieldValueById(id){


    const inputValue =  document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
  } 
  
  function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
  }


  function showSectionById(id){

    document.getElementById('donation-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
  
    document.getElementById(id).classList.remove('hidden');
  }