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

// let slider = document.getElementsByClassName("features__slider-container");
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





// Вешаем на прикосновение функцию handleTouchStart
document.addEventListener('touchstart', handleTouchStart, false);  
// А на движение пальцем по экрану - handleTouchMove      
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          plusSlide()
          console.log("ыдоваылдвао");
            /* left swipe */ 
        } else {
          console.log("ыдоваылываываыаывдвао");
            /* right swipe */
            minusSlide()
        }                       
    } else { // Это вам, в общем-то, не надо, вы ведь только влево-вправо собираетесь двигать
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};