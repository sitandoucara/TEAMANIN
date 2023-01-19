const slides = document.querySelectorAll(".container_img");
const slidesContainer = document.querySelector(".header_container");

let index = 0;
const sliderLenght = slides.length;

window.setInterval(() => {
  if (index < sliderLenght - 1) index++;
  else index = 0;
  console.log(index);
  slidesContainer.style.transform = `translate(-${100 * index}vw)`;
  console.log("ok");
}, 2000);

//Cloner le premier element et le mettre à la fin
