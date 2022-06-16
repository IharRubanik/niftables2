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

// Process
const sticky = document.querySelector(".process-parent");
const gridItems = document.querySelectorAll(".process-parent__item");
const processArrow = document.querySelector(".process__arrow");
const processArrowItem = document.querySelectorAll(".process__arrow-item");
const blockLine = document.querySelectorAll(".item__block-line");
const dottedLine = document.querySelectorAll(".dotted-line");
const manElem = document.querySelectorAll(".man-elem");
const line = document.querySelectorAll(".line");
const oval = document.querySelector(".oval");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const line4 = document.querySelector(".line-4");
const line5 = document.querySelector(".line-5");
const line6 = document.querySelector(".line-6");
const line7 = document.querySelector(".line-7");
const line8 = document.querySelector(".line-8");
const line9 = document.querySelector(".line-9");
const line10 = document.querySelector(".line-10");

window.addEventListener("scroll", function() {
  const scroll = window.pageYOffset - sticky.offsetTop,
    height = sticky.scrollHeight;

  let i = 0;
  scroll < 1 * (height / 6) - 600
    ? (i = 0)
    : scroll < 2 * (height / 6) - 600
    ? (i = 1)
    : scroll < 3 * (height / 6) - 600
    ? (i = 2)
    : scroll < 4 * (height / 6) - 600
    ? (i = 3)
    : scroll < 5 * (height / 6) - 600
    ? (i = 4)
    : (i = 5);

    for (let j = 0; j < gridItems.length; j++) {
      gridItems[j].classList.remove("active");
      gridItems[j].classList.remove("next");
      if (j < i) {
        gridItems[j].classList.add("prev");
        gridItems[j].classList.remove("next");
        gridItems[j].classList.remove("active-reverse");
      } else if (j > i) {
        gridItems[j].classList.add("next");
        gridItems[j].classList.remove("prev");
        gridItems[j].classList.remove("active-reverse");

      }
    }

 if (gridItems[i].classList.contains("prev")){
gridItems[i].classList.add("active-reverse");
gridItems[i].classList.remove("active");
gridItems[i].classList.remove("prev");
} else if (!gridItems[i].classList.contains("active-reverse")) {
 gridItems[i].classList.add("active");
}

// Line
  if (i == 0) {
    processArrow.style.width = "11.042vw"
  }
  else if (i == 1){
    processArrow.style.width = "23.438vw"
  }
  else if (i == 2){
    processArrow.style.width = "35.833vw"
  
  }
  else if (i == 3){
    processArrow.style.width = "48.229vw"
  }
  else if (i == 4){
    processArrow.style.width = "60.625vw"
  }
  else if (i == 5){
    processArrow.style.width = "72.865vw"
  }
  for (var x = 0; x < processArrowItem.length; x++) {
    manElem[x].classList.add("active");
    line[x].classList.add("active");
    processArrowItem[x].classList.remove("back");
    if (x < i) {
      processArrowItem[x].classList.add("back");
      processArrowItem[x].classList.remove("active");
      manElem[x].classList.add("active");
    }
     else if (x == i) {
      processArrowItem[x].classList.remove("back");
      processArrowItem[x].classList.add("active");
      processArrowItem[x].classList.remove("next");
      manElem[x].classList.add("active");
      
    }
     else if (x > i) {
      processArrowItem[x].classList.add("next");
      processArrowItem[x].classList.remove("active");
      manElem[x].classList.remove("active");  
    }
    if (i == 1) {
      line1.classList.add("active");
      line2.classList.add("active");
    }
    else if (i < 1) {
      line1.classList.remove("active");
      line2.classList.remove("active");
    }
    if (i == 2) {
      line3.classList.add("active");
      line4.classList.add("active");
    }
    else if (i < 2) {
      line3.classList.remove("active");
      line4.classList.remove("active");
    }
    if (i == 3) {
      line5.classList.add("active");
      line6.classList.add("active");
    }
    else if (i < 3) {
      line5.classList.remove("active");
      line6.classList.remove("active");
    }
    if (i == 4) {
      line7.classList.add("active");
      line8.classList.add("active");
    }
    else if (i < 4) {
      line7.classList.remove("active");
      line8.classList.remove("active");
    }
    if (i == 5) {
      line9.classList.add("active");
      line10.classList.add("active");
      oval.classList.add("active");  
    }
    else if (i < 5) {
      line9.classList.remove("active");
      line10.classList.remove("active");
      oval.classList.remove("active");
    }
  }
});

const slider1 = document.querySelector('.slider1')
const slider2 = document.querySelector('.slider2')

// функция следующий слайд
function nextSlide(slides, dots) {
    for(let i = 0; i < slides.length; i++ ) {    
        if (slides[i].classList.contains('active') || slides[i].classList.contains('active-reverse')) {  
            slides[i].classList.remove('active-reverse')
            slides[i].classList.add('active')
            if(i !== slides.length - 1) {
                slides[i].classList.remove('prev')
                slides[i].classList.remove('active') 
                slides[i].classList.add('prev')
                slides[i + 1].classList.add('active')  
                slides[i + 1].classList.remove('prev')
                slides[i + 1].classList.remove('next')
                dots[i].classList.remove('active')
                dots[i + 1].classList.add('active')
            } 
            else{
                slides[i].classList.remove('active') 
                slides[i].classList.add('prev')
                slides[0].classList.add('active')       
                slides[0].classList.remove('prev')       
                slides[0].classList.remove('next') 
                dots[i].classList.remove('active') 
                dots[0].classList.add('active')                
            }
            break 
        }  
    }  
}
// функция предыдущий слайд
function prevSlide(slides, dots) {
    for(let i = 0; i < slides.length; i++ ) {
        if (slides[i].classList.contains('active') || slides[i].classList.contains('active-reverse')) {
            slides[i].classList.remove('active')
            slides[i].classList.add('active-reverse')
            if(i !== 0 ) {
                slides[i].classList.remove('active-reverse')
                slides[i].classList.add('next')
                slides[i - 1].classList.add('active-reverse')
                slides[i - 1].classList.remove('next')
                slides[i - 1].classList.remove('prev')
                dots[i].classList.remove('active')
                dots[i - 1].classList.add('active')
            }
            else{
                slides[i].classList.add('next')
                slides[i].classList.remove('active-reverse')
                slides[slides.length -1].classList.add('active-reverse')
                slides[slides.length -1].classList.remove('next')
                slides[slides.length -1].classList.remove('prev')
                dots[i].classList.remove('active')
                dots[slides.length -1].classList.add('active')
            }
            break 
        }  
    }
}


// // let canvas = document.getElementById("c1");

// // Вешаем на прикосновение функцию handleTouchStart
// canvas.addEventListener('touchstart', handleTouchStart, false);  
// // А на движение пальцем по экрану - handleTouchMove      
// canvas.addEventListener('touchmove', handleTouchMove, false);

// var xDown = null;                                                        
// var yDown = null;                                                        

// function handleTouchStart(evt) {                                         
//     xDown = evt.touches[0].clientX;                                      
//     yDown = evt.touches[0].clientY;                                      
// };                                                

// function handleTouchMove(evt) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;                                    
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
//     // немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат (почему модули? потому что если движение сделано влево или вниз, то его показатель будет отрицательным) и сравнивается, чего было больше: движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо, но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
//           plusSlide()
//             /* left swipe */ 
//         } else {
//             /* right swipe */
//             minusSlide()
//         }                       
//     } 
//     /* reset values */
//     xDown = null;
//     // yDown = null;                                             
// };




// собираем элементы слайдера
function toogleSlider(slider) {
  const buttons = slider.querySelectorAll('.button')
  const slides = slider.querySelectorAll('.slider-item')
  const dots = slider.querySelectorAll('.dots')
  // const canvass = slider.querySelector('.canvas')
  function onButtonClick(e) {
      let direction = e.currentTarget.dataset.direction
      if (direction === 'next') {
          nextSlide(slides, dots)
      }
      else {
          prevSlide(slides, dots)
      }
  }
  for(let i = 0; i <buttons.length; i++) {
      buttons[i].addEventListener('click', onButtonClick)
  }
 
}
toogleSlider(slider1)
toogleSlider(slider2)






// let vision = document.getElementsByClassName("vision__sticky");
// // console.log(vision);


//  document.onwheel = function(event) {
//   // console.log(event);
//   if (event.deltaY > 0) {
//     console.log("вверх")
//   }
//   else {
//     console.log ("вниз")
//   }
//   let speed = event.deltaY;
//   speed = Math.abs(speed);
// }

// let left = 12;

// document.getElementsByClassName('vision__sticky').onwheel = function (event) {
// let line = event.deltaY;
// left = left + line;
// document.getElementsByClassName('vision__content').style.left = left  + "px";
// }

// Vision
// var left = 90;
// document.getElementById('test').onwheel = function (event){
// 	var line = event.deltaY;
// 	left = left - 0.1*line;
// 	document.getElementById('test2').style.left = left + '%';

// 	// return false;
// }







