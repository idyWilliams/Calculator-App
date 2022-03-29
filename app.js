//Definning Variables
const expBox = document.querySelector(".exp");
const resultBox = document.querySelector(".result");
const allBtn = document.querySelectorAll(".num");
const app = document.querySelector("#app");
const switchBtn = document.querySelector(".label-white");

//Javascript Code for the toggle switch
switchBtn.addEventListener("click", () => {
  if (switchBtn) {
    app.classList.toggle("light");
    app.classList.toggle("dark");
    switchBtn.classList.toggle("label-dark");
  }
});

//look through allbtns and add eventlisteners to it using ForEach and adda click event
allBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "c") {
      clear();
    } else if (btn.textContent === "*") {
      expBox.textContent += "*";
    } else if (btn.textContent === "+/-") {
      expBox.textContent = `-${expBox.textContent}`;
    } else if (btn.textContent === "=") {
      resultBox.textContent = eval(expBox.textContent);
    } else if (btn.textContent === "←") {
      expBox.textContent = expBox.textContent.slice(0, -1);
      resultBox.textContent = resultBox.textContent.slice(0, -1);
    } else {
      expBox.textContent += btn.textContent;
    }
  });
});

// the clear screen function
function clear() {
  expBox.textContent = " ";
  resultBox.innerHTML = " ";
}
