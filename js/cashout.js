document.getElementById('cashout-money-btn').addEventListener('click', function(event){
    event.preventDefault();

    const inputFielCashOut=inputValueGetElementById('input-cashout-money');
    const inputPineCashOut=inputValueGetElementById('input-cashout-pin');

    if(isNaN(inputFielCashOut)){
        alert('Fiend is a Number?')
        return;
    }

    if(inputPineCashOut===1234){
       const balance=getTextValueById('account-money');
       if(inputFielCashOut>balance){
        alert('this is a not Money')
        return;
    }
       const newbalance=balance-inputFielCashOut;
       document.getElementById('account-money').innerText=newbalance;

        //  transation cashout money
        const div=document.createElement('div');
        div.classList.add('bg-red-300');
        div.innerHTML=`
            <h4 class="text-3xl font-bold">Cas Out</h4>
            <p>Casout ${inputFielCashOut}, tottal mount${newbalance}</p>
        `
        document.getElementById('transation-container').appendChild(div);
    }
    else{
        alert('wron your pine and Money?')
    }
    
})
