var i = 1;
while (i <= 10) {
    document.write(i + "<br/>");
    ++i;
}

do {
    alert("hello world")
}
while (i > 20)
document.write("<br/");

var names = ["Reza", "Ali", "Sara", "Mina"];
var i = 0;
while (names[i]) {
    document.write(names[i] + "<br/>");
    i++;
}
document.write("<br/");

for (var i = 0; i <= 10; i++) {
    if (i == 3 || i == 7 || i == 9) {
        continue;
    }
    document.write(i + "<br/>");

}