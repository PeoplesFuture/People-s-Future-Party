// Toggle menu สำหรับมือถือ
function toggleMenu() {
    let menu = document.querySelector(".menu");
    let hamburger = document.querySelector(".hamburger");

    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        hamburger.textContent = "☰"; // เปลี่ยนเป็น ☰
    } else {
        menu.classList.add("show");
        hamburger.textContent = "✖"; // เปลี่ยนเป็น ✖
    }
}


// Main Slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentIndex].classList.remove('fade');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('fade');
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
