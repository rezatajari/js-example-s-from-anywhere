function mOver(obj) {
    obj.innerHTML = "Thank You !";
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me 1";
}

function myFunction() {
    var element = document.getElementById("fname");
    element.value = element.value.toUpperCase();
}

function changeText(id) {
    id.innerHTML = "Oooops !!!!!!";
}

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

document.getElementById("myBtn").onclick = salamIman;

function salamIman() {
    alert("Hello Iman Madaeny");
}

function loadBody() {
    //alert("Body Loaded...");
}

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me !";
}

function mUp(obj) {
    obj.style.backgroundColor = "#D94A38";
    obj.innerHTML = "Thank You !";
}