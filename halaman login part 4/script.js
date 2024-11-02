const btnLogin = document.getElementById('btnLogin');
const btnRegister = document.getElementById('btnRegister');
const formLogin = document.getElementById('login');
const formRegister = document.getElementById('register');

btnLogin.addEventListener('click', function() {
    formLogin.classList.remove('hidden');
    formLogin.classList.add('block');
    formRegister.classList.add('hidden');
    formRegister.classList.remove('block');
});

btnRegister.addEventListener('click', function() {
    formRegister.classList.remove('hidden');
    formRegister.classList.add('block');
    formLogin.classList.add('hidden');
    formLogin.classList.remove('block');
});