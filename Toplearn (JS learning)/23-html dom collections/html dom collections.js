var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection[1].innerHTML;
// alert(myCollection.length);

function myFun() {
    var myColl = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myColl.length; i++) {
        myColl[i].style.color = "red";
    }
}