var para = document.createElement("p");
var node = document.createTextNode("This is New");
para.appendChild(node);

var element = document.getElementById("div1");
// element.appendChild(para)
var child = document.getElementById("p2");
element.insertBefore(para, child);