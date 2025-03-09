{
  /* <div class="widget">
  <p>
    Background color: <span class="color">-</span>
  </p>
  <button type="button" class="change-color">
    Change color
  </button>
</div>; */
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", handleClick);

function handleClick(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = `${randomColor}`;
}
