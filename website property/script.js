function showPage(house) {
    const page = document.getElementById('house');
    page.classList.remove('active');

    const pageActive = document.getElementById(house);
    pageActive.classList.add('active');
}

const search = document.getElementById('search');
search.addEventListener('click', function() {
    showPage('house');
});