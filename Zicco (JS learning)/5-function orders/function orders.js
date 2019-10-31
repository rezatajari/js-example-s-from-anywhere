document.getElementById("oneid").onclick=function(){
    change('jsid','ndid');
}
document.getElementById("twoid").onclick=function(){
    change('ndid','rtid');
}
document.getElementById("three").onclick=function(){
     changestylejscripttonodejs('.js','.nd','jsid','ndid');
     
}
document.getElementById("four").onclick=function(){
     changestylenodejstoreactjs('.nd','.rt','ndid','rtid');
}
function change(a,b){
    var x= document.getElementById(a).innerHTML;
    var y= document.getElementById(b).innerHTML;
    document.getElementById(a).innerHTML=y;
    document.getElementById(b).innerHTML=x;
}
function changestylejscripttonodejs(a,b,c,d){
   const elone=document.querySelector(a);
   const elonestyle=getComputedStyle(elone);
   const bccolorelone=elonestyle.backgroundColor;
   const eltwo=document.querySelector(b);
   const eltwostyle=getComputedStyle(eltwo);
   const bccoloreltwo=eltwostyle.backgroundColor;
   document.getElementById(c).style.backgroundColor=bccoloreltwo;
   document.getElementById(d).style.backgroundColor=bccolorelone;
}
function changestylenodejstoreactjs(a,b,c,d){
    const elone=document.querySelector(a);
    const elonestyle=getComputedStyle(elone);
    const bccolorone=elonestyle.backgroundColor;
    const eltwo=document.querySelector(b);
    const eltwostyle=getComputedStyle(eltwo);
    const bccolortwo=eltwostyle.backgroundColor;
    document.getElementById(c).style.backgroundColor=bccolortwo;
    document.getElementById(d).style.backgroundColor=bccolorone;
}
