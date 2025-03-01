// Toggle menu สำหรับมือถือ

function toggleMenu() {
    let menu = document.querySelector(".menu");
    let hamburger = document.querySelector(".hamburger");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
        hamburger.textContent = "☰"; // เปลี่ยนกลับเป็น ☰
    } else {
        menu.style.display = "flex";
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
