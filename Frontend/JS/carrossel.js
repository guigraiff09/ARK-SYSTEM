const card = document.querySelector(".card");

const slides = document.querySelectorAll(".slide");
const firstClone = slides[0].cloneNode(true);

card.appendChild(firstClone);

let currentSlide = 0;

function nextSlide() {
    currentSlide++;

    card.style.transition = "transform 0.6s ease";
    card.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 8000);

card.addEventListener("transitionend", () => {
    if (currentSlide === slides.length) {
        card.style.transition = "none";
        currentSlide = 0;
        card.style.transform = "translateX(0)";
    }
});

