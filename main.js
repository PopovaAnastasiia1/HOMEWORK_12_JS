let btns = document.querySelectorAll(".btn");

document.addEventListener("keydown", (event) => {
  btns.forEach((btn) => {
    if (`${btn.dataset.key}` == event.code) {
      btn.classList.add("downKeyboard");
    } else {
      btn.classList.remove("downKeyboard");
    }
  });
});

