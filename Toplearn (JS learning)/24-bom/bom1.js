var w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;

document.getElementById("demo").innerHTML =
    "Browser inner window width : " + w + ", height : " + h;