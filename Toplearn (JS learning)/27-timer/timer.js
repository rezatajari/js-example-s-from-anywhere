var myTimer = setInterval(timeFunction, 1000);

function timeFunction() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function myFunction() {
    alert("Salam Azizam ...");
}