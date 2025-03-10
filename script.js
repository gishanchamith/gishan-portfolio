const images = [
    "j (1).jpg", "j (2).jpg", "j (3).jpg", "j (4).jpg", "j (5).jpg",
    "j (6).jpg", "j (7).jpg", "j (8).jpg", "j (9).jpg", "j (10).jpg",
    "j (11).jpg", "j (12).jpg", "j (13).jpg", "j (14).jpg", "j (15).jpg",
    "j (16).jpg", "j (17).jpg", "j (18).jpg", "j (19).jpg", "j (20).jpg",
    "j (21).jpg", "j (22).jpg", "j (23).jpg", "j (24).jpg", "j (25).jpg",
    "j (26).jpg", "j (27).jpg", "j (28).jpg"
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
    slide.classList.add("fade-in"); // Add fade-in effect
    setTimeout(() => slide.classList.remove("fade-in"), 500); // Remove effect after animation
}

// Auto slideshow every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);
