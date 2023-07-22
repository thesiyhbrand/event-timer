var daysElem = document.querySelector("#days h1");
var hoursElem = document.querySelector("#hours h1");
var minutesElem = document.querySelector("#minutes h1");
var secondsElem = document.querySelector("#seconds h1");


setInterval(function(){
    var today = new Date();
var future = new Date(2024, 0, 1, 0, 0, 0, 0);

var diff = future - today;

var seconds = Math.floor((diff / 1000));
var minutes = Math.floor((diff / (1000 * 60)));
var hours = Math.floor((diff / (1000 * 60 * 60)));
var days = Math.floor((diff / (1000 * 60 * 60 * 24)));

hours = hours % 24;

minutes = minutes % 60;

seconds = seconds % 60;

daysElem.textContent = days;
hoursElem.textContent = hours;
minutesElem.textContent = minutes;
secondsElem.textContent = seconds;

}, 1000)