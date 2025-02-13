// Event klik tombol "Buka Undangan"
document.getElementById("openInvitation").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll
    document.getElementById("content").style.opacity = "1"; // Menampilkan isi undangan
    document.getElementById("bgMusic").play(); // Memutar musik

    // Scroll ke isi undangan
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
});


// Fungsi untuk mengambil parameter dari URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Ambil nama dari parameter "nama"
const guestName = getQueryParam("nama");

// Periksa apakah ada nama di URL
if (guestName) {
    document.getElementById("guest-name").textContent = guestName;
} else {
    document.getElementById("guest-name").textContent = "Nama Tamu"; // Default jika tidak ada nama di URL
}
