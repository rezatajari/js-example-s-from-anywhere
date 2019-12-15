function LoadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    };

    xhttp.open("GET", "info.txt", true);
    xhttp.send();
}