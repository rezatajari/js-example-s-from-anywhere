document.getElementById('btn1').onclick = function() {
    document.getElementById('btn1').style.display = 'none';
}

document.getElementById('btn2').onclick = function() {
    var person = {
        fristname: "Iman",
        lastname: "Madaeny",
        Fullname: function() {
            return this.fristname + " " + this.lastname; //this defination line
        }
    }
    alert(person.Fullname());
}

// explain about different between "let" vs "var"
// var explain

document.getElementById('lblresult').innerHTML += "//var explain//" + "<br>";
var i = 7;
for (var i = 0; i < 11; i++) {
    document.getElementById('lblresult').innerHTML += i + '<br>';
}
document.getElementById('lblresult').innerHTML += "new i is: " + i;


document.getElementById('lblresult').innerHTML += "<br>" + "<br>";
// let explain

document.getElementById('lblresult').innerHTML += "//let explain//" + "<br>";
let j = 7;
for (let j = 0; j < 11; j++) {
    document.getElementById('lblresult').innerHTML += j + '<br>';
}
document.getElementById('lblresult').innerHTML += "new j is: " + j;