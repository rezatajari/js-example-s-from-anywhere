document.getElementById("toplearn").src = "https://toplearn.com/img/course/img-course-%D8%B3%D9%87-%D8%B4%D9%86%D8%A8%D9%87-%DB%B2%DB%B9-%D8%A2%D8%A8%D8%A7%D9%86-%DB%B1%DB%B3%DB%B9%DB%B7-52827508-563.jpg"
document.getElementById("toplearn").style.width = "150px";
document.getElementsByClassName("mya")[0].style.color = "red";

function myMove() {
    var elem = document.getElementById("animate");
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

(function() {
    var time = 0;
    var timeid = setInterval(change, 5000);

    function change() {
        document.getElementById("toplearn").src = "https://toplearn.com/img/course/img-course-%D8%B3%D9%87-%D8%B4%D9%86%D8%A8%D9%87-%DB%B1%DB%B3-%D8%A2%D8%B0%D8%B1-%DB%B1%DB%B3%DB%B9%DB%B7-71433572-475.jpg";
        clearInterval(timeid);
    }
})();