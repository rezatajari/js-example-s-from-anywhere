let userName = prompt("Who's there?", ' ');
if (userName == 'Admin') {
    let pass = prompt('password?', ' ');
    if (pass == 'TheMaster') {
        alert('welcome!');
    } else if (pass == ' ' || pass == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName == ' ' || userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}