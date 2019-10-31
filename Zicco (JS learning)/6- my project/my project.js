document.getElementById("btn1id").onclick = function() {
    changeinnerhtmlp1p2("p1id", "p2id");
}

function changeinnerhtmlp1p2(p1, p2) {
    var x = document.getElementById(p1).innerHTML;
    var y = document.getElementById(p2).innerHTML;
    document.getElementById(p1).innerHTML = y;
    document.getElementById(p2).innerHTML = x;
}
document.getElementById("btn2id").onclick = function() {
    changestylep1p2('.p1', '.p2', 'p1id', 'p2id');
}

function changestylep1p2(ps1, ps2, p1, p2) {
    const a = document.querySelector(ps1);
    const b = getComputedStyle(a);
    const backgroundp1 = b.backgroundColor;
    const colorp1 = b.color;

    const c = document.querySelector(ps2);
    const d = getComputedStyle(c);
    const backgroundp2 = d.backgroundColor;
    const colorp2 = d.color;

    document.getElementById(p1).style.backgroundColor = backgroundp2;
    document.getElementById(p1).style.color = colorp2;

    document.getElementById(p2).style.backgroundColor = backgroundp1;
    document.getElementById(p2).style.color = colorp1;
}

document.getElementById("btn3id").onclick = function() {
    changeinnerhtmlp2p3("p2id", "p3id");
}

function changeinnerhtmlp2p3(p2, p3) {
    var x = document.getElementById(p2).innerHTML;
    var y = document.getElementById(p3).innerHTML;
    document.getElementById(p2).innerHTML = y;
    document.getElementById(p3).innerHTML = x;
}

document.getElementById("btn4id").onclick = function() {
    changestylep2p3(".p2", ".p3", "p2id", "p3id");
}

function changestylep2p3(ps2, ps3, p2, p3) {
    const a = document.querySelector(ps2);
    const b = getComputedStyle(a);
    const backgroundp2 = b.backgroundColor;
    const colorp2 = b.color;

    const c = document.querySelector(ps3);
    const d = getComputedStyle(c);
    const backgroundp3 = d.backgroundColor;
    const colorp3 = d.color;

    document.getElementById(p2).style.backgroundColor = backgroundp3;
    document.getElementById(p2).style.Color = colorp3;

    document.getElementById(p3).style.backgroundColor = backgroundp2;
    document.getElementById(p3).style.color = colorp2;

}