//1
// document.getElementById("mybtn").addEventListener("click", function()
// {
//    alert("hello iman");
// });

//2 
// var x = document.getElementById("mybtn");
// x.addEventListener("click", hisuer);
// x.addEventListener("click", someFunction);

// function hiuser() {
//    alert("hello iman madaeny");
// }

// function someFunction() {
//    alert("سلام ایمان مدائنی");
// }

//3
var x = document.getElementById("mybtn");
x.addEventListener("mouseover", mOver);
x.addEventListener("mouseout", mOut);
x.addEventListener("click", mClick);

function mOver() {
    document.getElementById("demo").innerHTML += "Mouse over ! <br>";
}

function mOut() {
    document.getElementById("demo").innerHTML += "Mouse Out ! <br>";
}

function mClick() {
    document.getElementById("demo").innerHTML += "Mouse Click ! <br>";
}

window.addEventListener("resize", function() {
    myWidth(window.innerWidth);
})

function myWidth(width) {
    document.getElementById("demo1").innerHTML = width;
}