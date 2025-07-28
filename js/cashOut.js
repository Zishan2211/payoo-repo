document.getElementById('but-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const inputCashOut = document.getElementById('input-cash-out').value;
    const inputCashOutNumber = parseFloat(inputCashOut);
    const inputPinCashOut = document.getElementById('input-cashOut-pin').value;
   
    if(inputPinCashOut === '1'){
        const AvailableBalance = document.getElementById('account-blance').innerText;
        const AvailableBalanceNumber = parseFloat(AvailableBalance);
        
        const newBalance = AvailableBalanceNumber - inputCashOutNumber;
        document.getElementById('account-blance').innerText = newBalance;
        console.log(newBalance);
    }
    else{
        alert('worng pin. please try again')
    }

})