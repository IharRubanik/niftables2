let body = document.querySelector(".body");
let process = document.querySelector(".process");

let arrActive = ([] = document.querySelectorAll(
  ".header-button, .header-content, .header-name, body"
));

document.querySelector(".header-button").onclick = function () {
  for (i = 0; i < arrActive.length; i++) {
    arrActive[i].classList.toggle("active");
  }
};

let slides = document.getElementsByClassName("features__slider-item");
let dots = document.getElementsByClassName("slider-dots_item");
let active;
let tre;

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  for (i = 0; i < slides.length; i++){
    slides[i].classList.remove("active-reverse", "tre-reverse")
    slides[slideIndex - 1].classList.add("tre")
  }
  active = "active";
  tre = "tre";
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  for (i = 0; i < slides.length; i++){
    slides[i].classList.remove("active", "tre")
    slides[slideIndex - 1].classList.add("tre-reverse")
  }
  active = "active-reverse";
  tre = "tre-reverse";
  showSlides((slideIndex -= 1));
}

slides[slideIndex - 1].classList.add("active");


/* Основная функция слайдера */
function showSlides(n) {

  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.replace(active, tre);
    slides[slideIndex - 1].classList.remove(tre);     
  }
  slides[slideIndex - 1].classList.add(active);
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  dots[slideIndex - 1].className += " active";
}
