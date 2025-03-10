// index/gambar yang aktif
let currentIndex = 0;
const slides = document.querySelectorAll('.gallery img');
const next = document.querySelector('.fa-chevron-right');
const prev = document.querySelector('.fa-chevron-left');
// total slide/gambar
const totalSlides = slides.length;

// fungsi untuk menampilkan slide berdasarkan index yang aktif
function showSlides() {
    slides.forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });
}

// panggil fungsi
showSlides();

// event listener nest
next.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlides();
});

// event listener prev
prev.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlides();
});

showSlides();