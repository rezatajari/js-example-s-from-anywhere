var request = new XMLHttpRequest()
request.open('GET', 'data.txt'); // async defult is true
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        console.log(request);
        document.write(request.responseText);
    }
}

request.send()