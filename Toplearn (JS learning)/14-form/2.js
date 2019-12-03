function MyFunction() {
    var x = document.getElementById("fname").value;
    if (isNaN(x) || x < 1 || x > 10) {
        document.getElementById("demo").innerHTML = "Input Not Valid";
        document.getElementById("demo").style.color = "Red";
    } else {
        document.getElementById("demo").innerHTML = "Input Ok.";
        document.getElementById("demo").style.color = "Green";
    }

}