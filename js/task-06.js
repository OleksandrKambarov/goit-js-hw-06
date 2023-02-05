const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (textInput.value.length === Number(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    return textInput.classList.add("valid");
  }
  return textInput.classList.add("invalid");
});

const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("blur", onBlurBorderColor);

// var1
function onBlurBorderColor(event) {
  let inputValue = event.currentTarget.value;
  if (inputValue.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  }
  if (
    inputRef.value.length !== Number(inputRef.dataset.length) &&
    inputRef.value.length !== 0
  ) {
    inputRef.classList.add("invalid");
  }
}
