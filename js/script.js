let body = document.querySelector(".body");

let arrActive = ([] = document.querySelectorAll(
  ".header-button, .header-content, .header-name, body"
));

document.querySelector(".header-button").onclick = function () {
  for (i = 0; i < arrActive.length; i++) {
    arrActive[i].classList.toggle("active");
  }
};

