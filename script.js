const images = [
    "WhatsApp Image 2025-03-10 at 15.40.22_e5057b8d.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.23_6584d382.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.24_42ee6c13.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.25_19871768.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.26_33c2477c.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.28_88aa6eb8.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.27_2998fa5b.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.28_63cc60c6.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.28_835f7a55.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.29_f035a3c4.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.30_52bb3d41.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.30_ced215e5.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.31_bd6996f8.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.31_378e2a2e.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.32_528309c6.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.32_32996177.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.33_1d2f3ac9.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.33_ae833ee8.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.35_6a7f4d04.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.35_70bb82bc.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.36_9caeb832.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.36_30d5777a.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.37_81a3a11c.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.37_9b6d5a16.jpg",
    "WhatsApp Image 2025-03-10 at 15.40.37_8350c80a.jpg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    slide.src = images[currentIndex];
}

// Auto slideshow
setInterval(() => {
    changeSlide(1);
}, 3000);
