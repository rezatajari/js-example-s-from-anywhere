var requst = new XMLHttpRequest();
requst.open('GET', 'data.txt');
requst.onreadystatechange = function() {
    if (requst.readyState === 4 && requst.status === 200) {
        var modify = document.getElementsByTagName('ul')[1].getElementsByTagName('li');

        for (var i = 0; i < modify.length; i++) {
            modify[i].innerHTML = requst.responseText;
        }
    }
}

requst.send();