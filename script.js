// Toggle menu สำหรับมือถือ
function toggleMenu() {
    let menu = document.querySelector(".menu");
    let hamburger = document.querySelector(".hamburger");

    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        hamburger.textContent = "☰"; // เปลี่ยนเป็น ☰
    } else {
        menu.classList.add("show");
        hamburger.textContent = "X"; // เปลี่ยนเป็น X
    }
}


// Main Slider
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // เปลี่ยนภาพทุก 3 วินาที
}

document.addEventListener("DOMContentLoaded", showSlides);
