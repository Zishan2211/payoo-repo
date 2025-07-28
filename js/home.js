document.getElementById('but-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const inputAddmMoney = document.getElementById('input-add-money').value;
    const inputpin = document.getElementById('input-pin').value;

    if(inputpin === "0000" ){
        const accountBlance = document.getElementById('account-blance').innerText;
        
        const addMoneyNumber = parseFloat(inputAddmMoney);
        const balanceNumber = parseFloat(accountBlance);

        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance); 

        document.getElementById('account-blance').innerText = newBalance;
        console.log(newBalance ,'set the new blance');
    }
    else{
        alert('wrong pin. please try again');
    }

})