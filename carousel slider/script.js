// Mengambil elemen tombol "next" dan "prev" dari DOM
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// Mengambil elemen carousel utama dan elemen list yang berisi item carousel
const carousel = document.querySelector('.carousel');
const Slider = carousel.querySelector('.list');

// Mengambil elemen yang berisi thumbnail item dan semua item thumbnail di dalamnya
const thumbnailBorder = document.querySelector('.thumbnail');
const thumbnailItems = thumbnailBorder.querySelectorAll('.item');

// Mengambil elemen yang berisi waktu (tidak digunakan dalam kode ini)
const time = document.querySelector('.time');

// Pada saat inisialisasi, elemen pertama dari thumbnail dipindahkan
thumbnailBorder.appendChild(thumbnailItems[0]);

// Durasi animasi dalam milidetik untuk perpindahan slide
const timeRunning = 2000;

// Waktu otomatis untuk beralih ke slide berikutnya dalam milidetik
const timeAutoNext = 10000;

// Event listener untuk tombol "next" yang memanggil fungsi showSlider dengan argumen "next"
next.onclick = function () {
   showSlider('next');
};

// Event listener untuk tombol "prev" yang memanggil fungsi showSlider dengan argumen "prev"
prev.onclick = function () {
   showSlider('prev');
};

// Timer otomatis untuk beralih ke slide berikutnya setelah timeAutoNext
const runTimeOut = null;
const runNextAuto = setTimeout(() => {
   next.click();
}, timeAutoNext);

// Fungsi untuk mengatur perpindahan slide berdasarkan tipe "next" atau "prev"
function showSlider(type) {
   // Mengambil semua item carousel dan item thumbnail yang ada saat ini
   const SliderItems = Slider.querySelectorAll('.carousel .list .item');
   const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');

   if (type === 'next') {
      // Jika tipe "next", tambahkan item carousel pertama ke akhir list dan lakukan hal yang sama pada thumbnail
      Slider.appendChild(SliderItems[0]);
      thumbnailBorder.appendChild(thumbnailItems[0]);
      carousel.classList.add('next');  // fungsi 'next' untuk mengatur perpindahan (slide tidak ada di file html)
   } else {
      // Jika tipe "prev", tambahkan item carousel terakhir ke awal list dan lakukan hal yang sama pada thumbnail
      Slider.prepend(SliderItems[SliderItems.length - 1]);
      thumbnailBorder.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carousel.classList.add('prev');  // fungsi 'prev' untuk mengatur perpindahan (slide tidak ada di file html)
   }

   // Hapus kelas animasi setelah waktu animasi selesai
   clearTimeout(runTimeOut);
   runTimeOut = setTimeout(() => {
      carousel.classList.remove('prev'); // fungsi 'prev' untuk mengatur perpindahan (slide tidak ada di file html)
      carousel.classList.remove('next'); // fungsi 'next' untuk mengatur perpindahan (slide tidak ada di file html)
   }, timeRunning);

   // Reset timer otomatis untuk beralih ke slide berikutnya
   clearTimeout(runNextAuto);
   runNextAuto = setTimeout(() => {
      next.click();
   }, timeAutoNext);
}