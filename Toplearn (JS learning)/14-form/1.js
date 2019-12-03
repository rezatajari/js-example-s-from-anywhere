function MyFunction() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Please Enter Name ");
        return false;
    }
}