document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const addMoney=inputValueGetElementById('input-add-money');
    const casoutMoney=inputValueGetElementById('input-add-pin');

    if(isNaN(addMoney)){
        alert('Fiend is a Numbers');
        return;
    }

   if(casoutMoney===1234){
    const balance=getTextValueById('account-money');
    const newBalance=addMoney+balance;
    document.getElementById('account-money').innerText=newBalance;

    // transation add a field
    const p=document.createElement('p');
    p.innerHTML=`
        <p>Add Mount${addMoney}; tottal money${newBalance}</p>
    `
    document.getElementById('transation-container').appendChild(p);
   }
   else{
    alert('worne is a money and pin Number!')
   }
    
    
})