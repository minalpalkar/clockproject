function Time() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var sessions = document.getElementById('SESSIONS');

    if (hrs >= 12) {
        sessions.innerHTML = 'PM';
    } else {
        sessions.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('HOURS').innerHTML = hrs;
    document.getElementById('MINUTES').innerHTML = min;
    document.getElementById('SECONDS').innerHTML = sec;
}

setInterval(Time, 1000);




function setTime() {

    var timeSelect = document.getElementById('tSelect').value;
    var hour = new Date().getHours();

    if (timeSelect == hour) {
        document.getElementById('image').style.backgroundImage = "url(gmorning.png)";
        document.getElementById('msg').style.visibility = "visible";
        document.getElementById('msg').innerHTML = "GRAB SOME HEALTHY BREAKFAST !!!";
        document.getElementById('msg').style.fontSize = "25px";
        document.getElementById('msg').style.top = "252px";
        document.getElementById('gotit').innerHTML = "GOOD MORNING !! WAKE UP !!";
        document.getElementById('gotit').style.width = "482px";
    }

    var invalue = document.getElementById('tSelect');
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById('tList1').innerHTML = "Wake Up Time: " + value;


    var timeSelect = document.getElementById('tSelect2').value;
    var hour = new Date().getHours();

    if (timeSelect == hour) {
        document.getElementById('image').style.backgroundImage = "url(gafternoon.png)";
        document.getElementById('msg').style.visibility = "visible";
        document.getElementById('msg').innerHTML = "LET'S HAVE SOME LUNCH !!";
        document.getElementById('msg').style.fontSize = "25px";
        document.getElementById('msg').style.top = "252px";
        document.getElementById('gotit').innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById('gotit').style.width = "500px";
        document.getElementById('gotit').style.fontSize = "25px";
    }

    var invalue = document.getElementById('tSelect2');
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById('tList2').innerHTML = "Lunch Time: " + value;


    var timeSelect = document.getElementById('tSelect3').value;
    var hour = new Date().getHours();

    if (timeSelect == hour) {
        document.getElementById('image').style.backgroundImage = "url(gevening.png)";
        document.getElementById('msg').style.visibility = "visible";
        document.getElementById('msg').innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById('msg').style.fontSize = "25px";
        document.getElementById('msg').style.top = "232px";
        document.getElementById('gotit').innerHTML = "GOOD EVENING !!";
        document.getElementById('gotit').style.width = "482px";
    }

    var invalue = document.getElementById('tSelect3');
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById('tList3').innerHTML = "Nap Time: " + value;


    var timeSelect = document.getElementById('tSelect4').value;
    var hour = new Date().getHours();

    if (timeSelect == hour) {
        document.getElementById('image').style.backgroundImage = "url(gnight.png)";
        document.getElementById('msg').style.visibility = "visible";
        document.getElementById('msg').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById('msg').style.fontSize = "24px";
        document.getElementById('msg').style.top = "252px";
        document.getElementById('gotit').innerHTML = "GOOD NIGHT !!";
        document.getElementById('gotit').style.width = "482px";
    }


    var invalue = document.getElementById('tSelect4');
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById('tList4').innerHTML = "Night Time: " + value;

}


