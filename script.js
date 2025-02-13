document.getElementById("openInvitation").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll
    let content = document.getElementById("content");

    // Tambahkan kelas "show" agar teks muncul
    content.classList.add("show");

    content.scrollIntoView({ behavior: "smooth" });
});

// Fungsi untuk menambahkan kelas "show" saat elemen muncul di layar
function observeElements(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Tambahkan kelas "show" untuk memulai animasi
            observer.unobserve(entry.target); // Hentikan observer setelah elemen terlihat
        }
    });
}

// Buat observer untuk mendeteksi elemen masuk ke viewport
const observer = new IntersectionObserver(observeElements, {
    threshold: 0.3, // Animasi dimulai saat 30% elemen terlihat di layar
});

// Daftar elemen yang akan diamati untuk animasi
document.querySelectorAll(".content h2, .content h1, .content p, .scroll-indicator").forEach(el => {
    observer.observe(el);
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

// Tambahkan animasi ke elemen sampul saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".cover").classList.add("show");
});
