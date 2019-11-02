var names = ["Iman", "Ali", "Reza", "Sara", "Mina"];
for (var i = 0; i < names.length; i++) {
    document.getElementById("lblresult").innerHTML += names[i] + "<br/>";
}

for (n in names) {
    alert(names[n]);
}