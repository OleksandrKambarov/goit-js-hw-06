// const textInput = document.querySelector("#validation-input");

// textInput.addEventListener("blur", (event) => {
//   if (textInput.value.length === Number(textInput.dataset.length)) {
//     textInput.classList.remove("invalid");
//     return textInput.classList.add("valid");
//   }
//   return textInput.classList.add("invalid");
// });

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
