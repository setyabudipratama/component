// Mengambil semua elemen dengan class 'tab-item' dan menyimpannya dalam NodeList 'tabItems', menggunakan 'querySelectorAll'
const tabItems = document.querySelectorAll('.tab-item');

// Mengambil semua elemen dengan class 'tab-content-item' dan menyimpannya dalam NodeList 'tabContentItems', menggunakan 'querySelectorAll'
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Fungsi yang dijalankan ketika salah satu tab diklik
function selectItem(e) {
    // Menghapus border dari semua tab yang dipilih sebelumnya
    removeBorders();

    // Menghapus class 'show' dari semua konten tab yang ditampilkan sebelumnya
    removeShow();

    // Menambahkan border pada tab yang diklik, menggunakan 'classList.add'
    this.classList.add('tab-border');

    // Mengambil elemen tab-content-item yang terkait dengan tab yang diklik
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Menambahkan class 'show' pada elemen tab-content-item yang dipilih, menggunakan 'classList.add'   
    tabContentItem.classList.add('show');
}

// Fungsi untuk menghapus semua border dari tab yang dipilih
function removeBorders() {
    // Menghapus class 'tab-border' dari semua elemen tab-item, menggunakan 'classList.remove'
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Fungsi untuk menghapus tampilan dari semua tab-content-item yang dipilih
function removeShow() {
    // Menghapus class 'show' dari semua elemen tab-content-item, menggunakan 'classList.remove'
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Menambahkan event listener pada setiap elemen tab-item untuk mendeteksi klik
// Ketika elemen tab-item diklik, fungsi selectItem akan dijalankan, menggunakan 'addEventListener'
tabItems.forEach(item => item.addEventListener('click', selectItem));