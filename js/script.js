//animation
const slides = document.querySelectorAll(".container_img");
const slidesContainer = document.querySelector(".header_container");
const bulletsContainer = document.querySelector(".bullets");

let index = 0;
const sliderLenght = slides.length;

for (let i = 0; i < sliderLenght; i++) {
  const span = document.createElement("span");
  bulletsContainer.appendChild(span);
}

const bullets = bulletsContainer.children;
const setCurrentBullet = () => {
  const currentBulletIndex = index === sliderLenght ? 0 : index;
  for (const bulletItem of bullets) bulletItem.classList.remove("current");
  bullets[currentBulletIndex].classList.add("current");
};
setCurrentBullet();

const clone = slides[0].cloneNode(true); //clone
slidesContainer.appendChild(clone); //rajout elmnt à la fin

window.setInterval(() => {
  if (index < sliderLenght) {
    index++;
  } else {
    index = 0;
    slidesContainer.style.transition = "none";
  }
  slidesContainer.style.transform = `translate(-${100 * index}vw)`;
  setCurrentBullet();

  slidesContainer.offsetHeight;
  slidesContainer.style.transition = null;
  console.log("ok");
}, 3000);

//
