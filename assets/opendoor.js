let isOpen = false;
var btn_opendoor = document.getElementById("btn_opendoor");
var notifi = document.getElementById("demo");

var element = document.querySelector(".door");
element.addEventListener("click", alertDoor);

function alertDoor() {
    toggleDoor()
}
function toggleDoor() {
  element.classList.toggle("doorOpen");
  playVideo();
}

// play video

function playVideo() {
  var video = document.getElementById("video_tiktok");

  if (video.paused) {
    video.play(); // Nếu video đang dừng thì chạy nó
  } else {
    video.pause(); // Nếu video đang chạy thì dừng nó
  }
}


