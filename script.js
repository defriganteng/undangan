document.getElementById("openInvitation").addEventListener("click", function() {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll setelah tombol ditekan
    document.getElementById("invitationContent").scrollIntoView({ behavior: "smooth" });
});