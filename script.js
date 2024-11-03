

let first = document.getElementById("finput")
let second = document.getElementById("sinput")
let third = document.getElementById("tinput");

function convert(){
    let r = change(first.value);
    let g = change(second.value);
    let b = change(third.value);
    console.log(r+g+b);
    let add = "#"+r+g+b;
    let upper = add.toUpperCase();
    console.log(upper);
    document.getElementById("output").value=upper;
    document.body.style.backgroundColor=upper;
    function change(rgb){
        let get = Number(rgb).toString(16);
        return get
    }
    document.getElementById("finput").value="";
    document.getElementById("sinput").value="";
    document.getElementById("tinput").value="";
}