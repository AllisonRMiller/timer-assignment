var hr = prompt("Hours");
var min = prompt("Minutes");
var sec = eval(prompt("Seconds")) + eval(min *60) +eval(hr *3600);
console.log (sec)



function countDown() {
    var hour = Math.floor(sec/3600);
    var mins = Math.floor(sec/60)%60;
    var secs = Math.floor(sec%60);
    hour = currentTime(hour);
    mins = currentTime(mins);
    secs = currentTime(secs);

    document.getElementById("timer").innerHTML= hour + ":" + mins + ":" + secs;
    if (sec!=0) {sec--;
    setTimeout("countDown()", 1000);}
    else {document.getElementById("timer").innerHTML= "IT'S TIME!"}
}

countDown ();

function currentTime (u){
    if (u<10) {
        u = "0" + u
    }
    return u;

}