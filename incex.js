

// Get you some of that yummy javascript
const loginForm = document.getElementById('formLogin')
const loginBttn = document.getElementById('loginBttn')
const errorMssg = document.getElementById('UserNotif');



loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'user' && password === 'abc123') {
        window.location.href = 'second.html';

    }
    else {
        errorMssg.textContent = `Wrong Username/Password!`;
    }

})





