
function lengths() {
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    strings = a.length;
    resulte.value = strings;

}

function uppercase() {
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    resulte.value = a.toUpperCase();
}
function lowercase() {
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    resulte.value = a.toLowerCase();
}
function replace() {
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    let k = prompt("what do you want to remove");
    let y = prompt("what do you want yo add");
    resulte.value = a.replace(k, y);
}
// function lastindex(){
//     let a = document.getElementById("num").value;
//     let resulte = document.getElementById("display");
//      m=prompt("find the last index")
//     resulte.value=a.lastIndexof(m);
// }

function lastindex() {
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    t = prompt("find the last index")
    resulte.value = a.lastIndexOf(t);
}
function indexof() {
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    u = prompt("find the lastof")
    resulte.value = a.indexOf(u);
}
function concat() {
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    s = prompt("concat the given value")
    resulte.value = a.concat(s);
}
function repeat() {
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    k = prompt("how many time do you want to repeat")
    resulte.value = a.repeat(k);
}

function trim(){
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    resulte.value=a.trim();
}

function slice(){
    let a = document.getElementById("num").value;
    let resulte = document.getElementById("display");
    v=prompt("start")
    n=prompt("end")
    resulte.value=a.slice(v,n)
}