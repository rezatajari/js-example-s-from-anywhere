document.getElementById("changecolor").onclick=function(){
    var R=Math.round(Math.random()*256);
    var G=Math.round(Math.random()*256);
    var B=Math.round(Math.random()*256);
    var changecolor='rgb('+R+','+G+','+B+')';
    document.getElementById("changecolorstyle").style.backgroundColor=changecolor;
    document.getElementById("changecolorstyle").innerHTML='<p>'+changecolor+'</p>';
}

