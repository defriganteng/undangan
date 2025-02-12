document.getElementById("openInvitation").addEventListener("click", function() {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll setelah tombol ditekan
    document.getElementById("invitationContent").scrollIntoView({ behavior: "smooth" });
    document.getElementById("content").style.opacity = "1"; // Menampilkan isi undangan
    document.getElementById("bgMusic").play(); // Memutar lagu
});

// Mengambil nama tamu dari URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Menampilkan nama tamu jika tersedia
const guestName = getQueryParam("nama");
if (guestName) {
    document.getElementById("guestName").textContent = guestName;
}

