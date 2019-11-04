function myFunction() {
    var x;
    var message;
    x = document.getElementById("input").value;
    message = document.getElementById("lblresult");
    try {
        if (x == "") throw "empty"
        if (isNaN(x)) throw "not a number"
        x = Number(x);
        if (x < 5) throw "too low"
        if (x > 10) throw "too hight"
    } catch (err) {
        message.innerHTML = "Input is " + err;
    } finally {
        document.getElementById("input").value = "";
    }
}