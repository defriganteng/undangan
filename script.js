document.getElementById("openInvitation").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll
    let content = document.getElementById("content");

    console.log("Tombol diklik, menampilkan undangan...");

    // Gunakan timeout untuk memastikan perubahan dikenali oleh browser
    setTimeout(() => {
        content.classList.add("show");
        console.log("Kelas .show ditambahkan:", content.classList.contains("show"));
    }, 50); // Delay kecil agar browser mengenali perubahan
    
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
