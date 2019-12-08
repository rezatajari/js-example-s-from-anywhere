function Sum(x, y) {
    if (x === undefined) {
        x = 0;
    }
    if (y === undefined) {
        y = 0;
    }
    return x + y;
}

function Sum2(x = 1, y = 1) {
    return x + y;
}

function MyFunction() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

// MyFunction(4,"iman",true,456);

function add() {
    var counter = 0;

    function plus() {
        counter += 1;
    }

    plus();
    plus();
    return counter;
}

console.log(add());