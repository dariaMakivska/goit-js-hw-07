const input = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

let spanOutputElement = "Anonymous";

input.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  spanOutputElement = event.currentTarget.value.trim();
  nameOutput.textContent = spanOutputElement;

  if (nameOutput.textContent === "") {
    nameOutput.textContent = "Anonymous";
  }
}
