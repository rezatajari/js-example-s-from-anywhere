function MyFunction() {
    var x = document.forms["frm1"];
    var text = "";

    for (var i = 0; i < x.length; i++) {
        text += x.elements[i].value + "</br>";
    }
    document.getElementById("demo").innerHTML = text;
}

//document.getElementById('demo').innerHTML = "Iman Madaeny";
//var Ps = document.getElementsByTagName("p");
//for (n in Ps) {
//    console.log(Ps[n].innerHTML);
//}
//var element = document.getElementsByClassName("iman");
//console.log(element[0].innerHTML);

//var x = document.querySelectorAll("p.iman");
//console.log(x[0].innerHTML);