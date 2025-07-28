document.getElementById('login').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('number').value;
    const pinNumber = document.getElementById('pin').value;
    if (phoneNumber === '1' && pinNumber === '1') {
        window.location.href = "/home.html"
    }
    else {
        alert('wrong pin or number');
    }
})