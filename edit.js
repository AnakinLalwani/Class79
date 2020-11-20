var names = [];

function submit() {
    var name1 = document.getElementById("studentinput1").value;
    var name2 = document.getElementById("studentinput2").value;
    var name3 = document.getElementById("studentinput3").value;
    var name4 = document.getElementById("studentinput4").value;
    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);
    console.log(names);
    document.getElementById("allnames").innerHTML=names;
    document.getElementById("submitbtn").style.display = "none";
    document.getElementById("sortbtn").style.display = "inline";
}
function sort() {
    names.sort();
    console.log(names);
    document.getElementById("allnames").innerHTML=names;
}