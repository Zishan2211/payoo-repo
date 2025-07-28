document.getElementById('but-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const inputAddmMoney = document.getElementById('input-add-money').value;
    const inputpin = document.getElementById('input-pin').value;
    console.log(inputAddmMoney,inputpin);
})