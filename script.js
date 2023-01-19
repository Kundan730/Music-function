let drumLength = document.querySelectorAll('.drum').length;

// document.querySelector('.set .l').addEventListener('click', function () {
//   alert('I got clicked')
// });

for(let i = 0; i < drumLength; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {

    this.style.color = 'yellow';
    
  });
}

// let audio = new Audio('sounds/tom-4.mp3')
// audio.play();