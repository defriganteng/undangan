// Event klik tombol "Buka Undangan"
document.getElementById("openInvitation").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll
    document.getElementById("content").style.opacity = "1"; // Menampilkan isi undangan
    document.getElementById("bgMusic").play(); // Memutar musik

    // Scroll ke isi undangan
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
});
