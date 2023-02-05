function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textColor = document.querySelector(".color");
const changeFonColorBtn = document.querySelector(".change-color");
const body = document.body;

const changeFonColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  textColor.textContent = getRandomHexColor();
};

changeFonColorBtn.addEventListener("click", changeFonColor);
