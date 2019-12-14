function btn1() {
    alert("i am an alert box !");
}

function btn2() {
    var txt = "";
    if (confirm("Press a Button !")) {
        txt = "You Press Ok !";
    } else {
        txt = "You Press Cancel !";
    }
    document.getElementById("demo").innerHTML = txt;
}

function btn3() {
    var txt = "";
    var person = prompt("Please Enter Your Name :", "Iman Madaeny");
    if (person == null || person == "") {
        txt = "User Cancelled The Promt !";
    } else {
        txt = "Hello " + person;
    }
    document.getElementById("demo").innerHTML = txt;
}