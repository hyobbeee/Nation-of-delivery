const image = [
    "main_01_2x.jpg",
    "main_02_2x.jpg",
    "main_03_2x.jpg",
    "main_05_2x.jpg",
];
const text = [
    "main_text_01_2x.png",
    "main_text_02_2x.png",
    "main_text_03_2x.png",
    "main_text_05_2x.png",
];
const index = Math.floor(Math.random() * image.length);
const randomImage = image[index];
const randomText = text[index];
const s0LeftText = document.querySelector(".s0-left>img");
const sectionS0 = document.querySelector(".section-bg");

sectionS0.style.backgroundImage = `url(../img/${randomImage})`;
s0LeftText.setAttribute("src", `../img/${randomText}`);
