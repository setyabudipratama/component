const bars = document.querySelector('header .fa-bars-staggered');
bars.addEventListener('click', function() {
    this.classList.toggle('fa-xmark');
    const icons = document.querySelectorAll('header .fa-brands');
    icons.forEach(icon => icon.classList.toggle('active'));
    bars.style.color = [...icons].some(icon => icon.classList.contains('active')) ? 'black' : 'white';
});
