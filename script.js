function kirimPesan() {
  // Ambil nilai dari input
  const nama = document.getElementById("nama").value;
  const alamatPenjemputan = document.getElementById("alamatPenjemputan").value;
  const alamatTujuan = document.getElementById("alamatTujuan").value;

  // Buat URL WhatsApp
  const nomorWhatsApp = "628895885691"; // Ganti dengan nomor tujuan
  const pesan = `Halo driver ganteng,aku mau pesen layanan anjem\n\nNama: ${nama}\n\nPenjemputan: ${alamatPenjemputan}\n\nTujuan: ${alamatTujuan}`;
  const url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

  // Buka URL WhatsApp
  window.open(url, "_blank");
}
