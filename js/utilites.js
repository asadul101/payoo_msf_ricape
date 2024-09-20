function inputValueGetElementById(id){
   
    const inputField=document.getElementById(id).value;
    const inputNumber=parseFloat(inputField);
    return inputNumber;
}

function getTextValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}

function getHiddinAllField(id){
    document.getElementById('add-money-input-forme').classList.add('hidden');
    document.getElementById('cashout-input-frome').classList.add('hidden');
    document.getElementById('transation-sction').classList.add('hidden');

    //  show hidden all clear
    document.getElementById(id).classList.remove('hidden')
}