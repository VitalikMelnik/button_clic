/**
 * Created by vitalik on 14.03.16.
 */
var i =0;
function ButtonDown (button) {
    setInterval(function(){
        i++;
    }, 3000);
}
function ButtonUp (button) {
    console.log(i);
    if(i>=1) {
        alert("more than 3 seconds")
    }
    else {
        alert("1 seconds");
    }
    i=0;
}
function dbclic(){
    alert("double click");
}
