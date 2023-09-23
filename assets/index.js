const PASSWORD ="12345";
let isOpen = false
var btn_opendoor = document.getElementById("btn_opendoor")
var notifi = document.getElementById("demo")

var element = document.querySelector(".door");
element.addEventListener("click", alertDoor);

function alertDoor(){
    notifi.innerHTML = "Vui lòng nhập mật khẩu";
}
function toggleDoor() {
    element.classList.toggle("doorOpen");
    playVideo()
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

function myFunction() {
    var getpassword = document.getElementById("myText").value;
    if(getpassword===PASSWORD){
        isOpen = !isOpen
        toggleDoor();
        if(isOpen==true){
            btn_opendoor.innerText="Đóng cửa";
            notifi.innerHTML = "Mở cửa thành công";
        }else{
            btn_opendoor.innerText="Mở cửa";
            notifi.innerHTML = "Đóng cửa thành công";
        }
    }else{
        notifi.innerHTML = "Sai mật khẩu";
    }
}