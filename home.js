document.getElementById('btn-submit').addEventListener('click', function () {

    const userEmail = document.getElementById('user-email');
    const mail = userEmail.value;
    //console.log(mail);

    const userPassword = document.getElementById('user-password');
    const userPass = userPassword.value;


    //verify email and password compare
    if (mail === 'mizan@gmail.com' && userPass === 'Mohsina389') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid user');
    }
})