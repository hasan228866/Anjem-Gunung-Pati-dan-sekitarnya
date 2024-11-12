function sendToWhatsApp() {
  // Ambil nilai dari setiap input
  const name = document.getElementById("name").value;
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;

  // Buat pesan yang akan dikirim ke WhatsApp
  const message = `Halo, saya ingin memesan layanan antar jemput dengan rincian sebagai berikut:%0A%0A`%0A`
                  `Nama: ${name}%0A` +
                  `Alamat Penjemputan: ${pickup}%0A` +
                  `Alamat Tujuan: ${destination}%0A` +

  // Ganti dengan nomor WhatsApp tujuan (gunakan format internasional tanpa tanda '+')
  const whatsappNumber = "628895885691"; // Contoh: 6281234567890 untuk nomor Indonesia

  // Buat URL WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Buka link WhatsApp di tab baru
  window.open(whatsappURL, "_blank");
}
