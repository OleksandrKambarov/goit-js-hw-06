const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", onBlurColor);

function onBlurColor(event) {
  let inputValue = event.currentTarget.value;
  if (inputValue.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  }
  if (textInput.value.length === 0) {
    textInput.classList.remove("valid");
    textInput.classList.remove("invalid");
  }
  if (
    textInput.value.length !== Number(textInput.dataset.length) &&
    textInput.value.length !== 0
  ) {
    textInput.classList.add("invalid");
  }
}
