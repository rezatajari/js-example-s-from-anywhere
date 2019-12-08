function Myfunction() {
    var a, b, c;
    a = 10;
    b = 20;
    c = a * b;
    alert(c);
}

var x = function(a, b) {
    return a + b;
}

var c = x(4, 6);
console.log(c);

var my = new Function("a", "b", "return a*b");
var a1 = my(4, 2);
console.log(a1);

(function() {
    // alert("Loaded ...");
})();

(function() {})();

function sum(a, b) {
    return a + b;
}
var c1 = sum(4, 6) + 3;
console.log(c1.toString() + "2");

//function sum2(a,b) => a+b;
var sum2 = (a, b) => a + b;
const sum3 = (x, y) => {
    return x * y;
}
alert(sum2(7, 8));