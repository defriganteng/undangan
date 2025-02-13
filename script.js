document.getElementById("openInvitation").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll
    let content = document.getElementById("content");
    
    content.style.opacity = "1"; // Menampilkan isi undangan
    content.classList.add("show"); // Tambahkan kelas animasi

    document.getElementById("bgMusic").play(); // Memutar musik

    // Scroll ke isi undangan
    content.scrollIntoView({ behavior: "smooth" });
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
