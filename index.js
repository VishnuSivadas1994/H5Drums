var audio;


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // alert("Cliked!");

    var x = this.innerHTML;
    // this.style.color = "white";
    // alert(x);
    makeSound(x);
    buttonAnimation(x);

  });
}

function makeSound(key) {
  switch (key) {
    case 'w':
      playAudio("tom-1.mp3");
      break;
    case 'a':
      playAudio("tom-2.mp3");
      break;
    case 's':
      playAudio("tom-3.mp3");
      break;
    case 'd':
      playAudio("tom-4.mp3");
      break;
    case 'j':
      playAudio("crash.mp3");
      break;
    case 'k':
      playAudio("kick-bass.mp3");
      break;
    case 'l':
      playAudio("snare.mp3");
      break;
    default:

  }
}

addEventListener("keydown", function() {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function playAudio(songName) {
  audio = new Audio("sounds/" + songName);
  audio.play();
}



function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
