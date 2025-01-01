// fungsi label username dan password login
const inputUsername = document.getElementById('username');
inputUsername.addEventListener('input', toggleActiveClass);
inputUsername.addEventListener('blur', toggleActiveClass);
const inputPassword = document.getElementById('password');
inputPassword.addEventListener('input', toggleActiveClass);
inputPassword.addEventListener('blur', toggleActiveClass);

// fungsi label username dan password register
const inputUsernameRegister = document.getElementById('username2');
inputUsernameRegister.addEventListener('input', toggleActiveClass);
inputUsernameRegister.addEventListener('blur', toggleActiveClass);
const inputPassowordRegister = document.getElementById('password2');
inputPassowordRegister.addEventListener('input', toggleActiveClass);
inputPassowordRegister.addEventListener('blur', toggleActiveClass);
const inputPasswordRegister2 = document.getElementById('password3');
inputPasswordRegister2.addEventListener('input', toggleActiveClass);
inputPasswordRegister2.addEventListener('blur', toggleActiveClass);

function toggleActiveClass() {
    const labelActive = this.labels[0];
    if (this.value.trim() !== '') {
        labelActive.classList.add('active');
    } else {
        labelActive.classList.remove('active');
    }
}

// fungsi beralih ke register
document.getElementById('register').addEventListener('click', function() {
    document.querySelector('.login').classList.remove('active');
    document.querySelector('.register').classList.add('active');
});

document.getElementById('login').addEventListener('click', function() {
    document.querySelector('.login').classList.add('active');
    document.querySelector('.register').classList.remove('active');
});