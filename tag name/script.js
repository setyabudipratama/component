const close = document.querySelectorAll('.close');
// buat event listener untuk tombol close
close.forEach(del => del.addEventListener('click', function(e) { // del sebagai variabel untuk close
    // ambil parent element
    const card = this.parentElement;
    // hapus element card
    card.style.display = 'none';
}));