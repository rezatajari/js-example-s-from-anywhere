document.getElementById("b1").onclick = function () {
    document.getElementById("js").innerHTML = "<p>change to my idea</p>";
}
document.getElementById("b2").onmouseleave = function () {
    document.getElementById("rt").innerHTML = "<p>change to reat text</p>";
}
document.getElementById("b3").onmouseenter = function () {
    document.getElementById("gx").innerHTML = "<p>change node.js element</p>";
}
document.getElementById("b4").onclick = function () {
    document.getElementById("gx").style.width = "500px";
    document.getElementById("gx").style.backgroundColor = "red";
    document.getElementById("gx").style.color = "green";
}
document.getElementById("b5").onclick = function () {
    document.getElementById("rt").style.fontFamily = "monospace";
    document.getElementById("rt").style.fontSize = "3em";
}