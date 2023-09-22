const PASSWORD ="thuyduong";

var element = document.querySelector(".door");
element.addEventListener("click", alertDoor);
function alertDoor(){
    document.getElementById("demo").innerHTML = "Vui lòng nhập mật khẩu";
}
function toggleDoor() {
    element.classList.toggle("doorOpen");
}
let isOpen = false
function myFunction() {
    var getpassword = document.getElementById("myText").value;
    if(getpassword===PASSWORD){
        isOpen = !isOpen
        toggleDoor();
        if(isOpen==true){
            var btn_opendoor = document.getElementById("btn_opendoor").innerText="Đóng cửa";
            document.getElementById("demo").innerHTML = "Mở cửa thành công";
        }else{
            var btn_opendoor = document.getElementById("btn_opendoor").innerText="Mở cửa";
            document.getElementById("demo").innerHTML = "Đóng cửa thành công";
        }
    }else{
        document.getElementById("demo").innerHTML = "Sai mật khẩu";
    }
}