var btn = document.getElementById('btnLoad');
btn.onclick = function() {
    var requst = new XMLHttpRequest();
    requst.open('GET', 'data.json');
    requst.onreadystatechange = function() {
        if (requst.readyState === 4 && requst.status === 200) {
            var items = JSON.parse(requst.responseText);

            var output = "<ul>";

            for (var key in items) {
                console.log(items[key]);
                output += "<li>" + items[key].name + " | " + items[key].bio + "</li>";
            }

            output += "</ul>";
            document.getElementById('update').innerHTML = output;
        }
    }
    requst.send();
}