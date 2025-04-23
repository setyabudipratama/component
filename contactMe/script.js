document.getElementById('kirim').addEventListener('click', (e) => {
    e.preventDefault()
    const namaDepan = document.getElementById('depan').value
    const namaBelakang = document.getElementById('belakang').value
    const email = document.getElementById('email').value
    const number = document.getElementById('number').value
    const pesan = document.getElementById('pesan').value

    const pesanContainer = [
        `Nama Depan : ${namaDepan}`,
        `Nama Belakang : ${namaBelakang}`,
        `Email : ${email}`,
        `Number : ${number}`,
        `Pesan : ${pesan}`
    ]

    const message = encodeURIComponent(pesanContainer.join('\n'))
    const nmr = '' // nomor whatsapp
    const link = `https://wa.me/${nmr}?text=${message}`
    window.open(link)
})