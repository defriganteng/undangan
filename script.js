document.addEventListener("DOMContentLoaded", function() {
    // Initialize elements
    const cover = document.querySelector(".cover");
    const content = document.getElementById("content");
    const secondContent = document.getElementById("secondContent");
    const scrollIndicator = document.getElementById("scrollIndicator");
    const openButton = document.getElementById("openInvitation");
    const bgMusic = document.getElementById("bgMusic");
    
    // Add animation to cover when page loads
    cover.classList.add("show");

    // Handle opening invitation
    openButton.addEventListener("click", function() {
        document.body.style.overflow = "auto"; // Enable scrolling
        
        // Handle background music
        if (bgMusic) {
            bgMusic.muted = false;
            bgMusic.play().catch(error => {
                console.log("Musik tidak dapat diputar otomatis, pengguna harus menekan tombol play.");
            });
        }

        // Show content and scroll to it
        content.classList.add("show");
        content.scrollIntoView({ behavior: "smooth" });
    });

    // Intersection Observer for animation
    function observeElements(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(observeElements, {
        threshold: 0.3
    });

    // Observe all content elements
    document.querySelectorAll(".content, .content h2, .content h1, .content p, .scroll-indicator").forEach(el => {
        observer.observe(el);
    });

    // Handle scroll indicator visibility
    window.addEventListener("scroll", function() {
        const secondPageTop = secondContent.getBoundingClientRect().top;
        
        if (secondPageTop <= window.innerHeight) {
            scrollIndicator.style.opacity = "0";
            scrollIndicator.style.visibility = "hidden";
        } else {
            scrollIndicator.style.opacity = "1";
            scrollIndicator.style.visibility = "visible";
        }
    });

    // Handle guest name from URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const guestName = getQueryParam("nama");
    if (guestName) {
        document.getElementById("guest-name").textContent = guestName;
    } else {
        document.getElementById("guest-name").textContent = "Nama Tamu";
    }

    // Initial setup
    document.body.style.overflow = "hidden";
    if (content) content.classList.remove("show");
    if (secondContent) secondContent.classList.remove("show");
});

// Function for RSVP confirmation
function confirmAttendance(status) {
    if (status === "hadir") {
        alert("Terima kasih atas konfirmasi kehadiran Anda");
    } else {
        alert("Terima kasih atas informasinya");
    }
}
