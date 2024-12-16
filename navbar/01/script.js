const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu ul');

toggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});