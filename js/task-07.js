const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
    console.dir(`${event.currentTarget.value}px`);
    textEl.classList.add("fontsize");
    textEl.style.fontSize === `${event.currentTarget.value}px`;
})