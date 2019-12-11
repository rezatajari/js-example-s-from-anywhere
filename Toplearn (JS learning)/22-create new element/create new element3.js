var element = document.getElementById("div1");
var child = document.getElementById("p1");

//New
var para = document.createElement("p");
var node = document.createTextNode("This is New");
para.appendChild(node);

element.replaceChild(para, child);