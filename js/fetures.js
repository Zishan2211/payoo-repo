document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('cashOut-from').classList.remove('hidden');
    document.getElementById('add-money-from').classList.add('hidden');
});

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    document.getElementById('cashOut-from').classList.add('hidden');
    document.getElementById('add-money-from').classList.remove('hidden');
})