var app = angular.module("angularApp", []);

function onLoad() {
        getAPIBadge();
}
function checkNumber() {

    var theNumber, theMessage;

    theNumber = document.getElementById("smallnumber").Value;

    //if x is Not a Number or less than one or greater than 10
    if (isNaN(theNumber) || theNumber < 1 || theNumber > 10) {
        theMessage = "Number was expected to be between 1 and 10";  
    } else {
        theMessage = "Number is Good";
    }
    $("#numberMessage"),text(theMessage);
    
function getAPIBadge(){
    document.getElementById("numberMassage").innerHTML = theMessage;
}
}
    