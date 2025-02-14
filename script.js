document.getElementById("openInvitation").addEventListener("click", function () {
    document.body.style.overflow = "auto"; // Mengaktifkan scroll
    let content = document.getElementById("content");
    let mainWrapper = document.querySelector(".main-content-wrapper");

    // Memastikan musik latar diputar
    let bgMusic = document.getElementById("bgMusic");
    bgMusic.muted = false; // Pastikan tidak mute
    bgMusic.play().catch(error => {
        console.log("Musik tidak dapat diputar otomatis, pengguna harus menekan tombol play.");
    });

    // Pastikan seluruh isi undangan terlihat
    content.classList.add("show");
    mainWrapper.style.visibility = "visible"; // Memastikan wrapper konten terlihat

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
    root: null,
    rootMargin: '0px'
});

// Amati elemen `.content` dan semua elemen animasi
document.querySelectorAll(".content, .content h2, .content h1, .content p, .scroll-indicator, .couple-info, .wedding-details, .rsvp-section").forEach(el => {
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
    document.getElementById("guest-name").textContent = decodeURIComponent(guestName);
} else {
    document.getElementById("guest-name").textContent = "Nama Tamu"; // Default jika tidak ada nama di URL
}

// Tambahkan animasi ke elemen sampul saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".cover").classList.add("show");
    
    // Inisialisasi status scroll indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    const mainWrapper = document.querySelector(".main-content-wrapper");
    
    // Pastikan main wrapper tersembunyi saat awal
    if (mainWrapper) {
        mainWrapper.style.visibility = "hidden";
    }
    
    // Handler scroll untuk scroll indicator dan parallax effect
    window.addEventListener('scroll', function() {
        const secondPage = document.getElementById('secondContent');
        const secondPageTop = secondPage.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;
        
        // Sembunyikan scroll indicator ketika mencapai halaman kedua
        if (secondPageTop <= window.innerHeight) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.visibility = 'visible';
        }

        // Optional: Tambahkan efek parallax pada background
        const backgroundContainer = document.querySelector('.background-container');
       // if (backgroundContainer) {
          //  backgroundContainer.style.transform = `translateY(${scrollPosition * 0.5}px)`;
       // }
    });
});

// Fungsi untuk konfirmasi kehadiran
function confirmAttendance(status) {
    const message = status === 'hadir' ? 
        'Terima kasih atas konfirmasi kehadiran Anda!' : 
        'Terima kasih atas informasinya, kami mohon maaf Anda tidak dapat hadir.';
    alert(message);
}



function updateBackgroundHeight() {
    const bg = document.querySelector('.background-container');
    bg.style.height = `${window.innerHeight}px`; // Pastikan tinggi sesuai dengan viewport nyata
}

// Jalankan saat halaman dimuat
updateBackgroundHeight();

// Pastikan update berjalan saat resize atau perubahan viewport
window.addEventListener('resize', updateBackgroundHeight);

// Observer untuk mendeteksi perubahan tinggi viewport secara real-time (termasuk saat search bar Chrome muncul/hilang)
const observer = new ResizeObserver(updateBackgroundHeight);
observer.observe(document.documentElement);
