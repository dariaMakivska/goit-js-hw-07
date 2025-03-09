const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (info.email === "" || info.password === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log(info);
  form.reset();
}

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    if (this.value === "") {
      this.placeholder = "Type area";
    }
  });

  input.addEventListener("blur", function () {
    if (this.value === "") {
      this.placeholder = "";
    }
  });
});
