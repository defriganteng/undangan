// Event klik tombol "Buka Undangan"
document.getElementById("openInvitation").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll
    document.getElementById("content").style.opacity = "1"; // Menampilkan isi undangan
    document.getElementById("bgMusic").play(); // Memutar musik
});

// Event klik panah ke atas
document.querySelector(".scroll-up").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
