document.getElementById("openInvitation").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll
    let content = document.getElementById("content");
    
    content.style.display = "flex"; // Pastikan elemen tampil dulu
    setTimeout(() => {
        content.classList.add("show"); // Tambahkan kelas animasi setelah sedikit delay
    }, 100); // Delay 100ms untuk memastikan browser mengenali perubahan
    
    document.getElementById("bgMusic").play(); // Memutar musik

    // Tambahkan sedikit delay sebelum scroll untuk memastikan efek muncul
    setTimeout(() => {
        content.scrollIntoView({ behavior: "smooth" });
    }, 500);
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
