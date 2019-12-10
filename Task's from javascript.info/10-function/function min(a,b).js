// A solution using if:

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

let a = parseInt(prompt("enter 'a' number ?"));
let b = parseInt(prompt("enter 'b' number ?"));
document.write(min(a, b));