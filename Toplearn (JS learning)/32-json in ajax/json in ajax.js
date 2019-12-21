var requst = new XMLHttpRequest();
requst.open('GET', 'data.xml');
requst.onreadystatechange = function() {
    if (requst.readyState === 4 && requst.status === 200) {
        var items = requst.responseXML.getElementsByTagName('name');
        var output = "<ul>";

        for (var i = 0; i < items.length; i++) {
            output += "<li>" + items[i].firstChild.nodeValue + "</li>";
        }

        output += "</ul>";
        document.getElementById("update").innerHTML = output;
    }
}

requst.send();