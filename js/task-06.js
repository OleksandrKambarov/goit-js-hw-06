const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", event => {
  if (textInput.value.length === Number(textInput.dataset.length)) {
  textInput.classList.remove("invalid");
  return textInput.classList.add("valid");
}
textInput.classList.remove("valid");
return textInput.classList.add("invalid");
});


