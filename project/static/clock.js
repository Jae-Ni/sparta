var clockContainer = document.querySelector(".clock");
//   clock = clockContainer.querySelector("h1");
var month = document.getElementById("month");
var date = document.getElementById("date");
var year = document.getElementById("year");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var day = document.getElementById("day");

var dayList = [
  "SUNDAY",
  "MONDAY",
  "TUEDAY",
  "WEDNESDAY",
  "THUDAY",
  "FRIDAY",
  "SATURDAY",
];
function time() {
  var today = new Date();

  var hh = addZero(today.getHours());
  var mm = addZero(today.getMinutes());
  var ss = addZero(today.getSeconds());

  hours.innerHTML = hh;
  minutes.innerHTML = mm;
  seconds.innerHTML = ss;

  day.innerHTML = dayList[today.getDay()];
  year.innerHTML = today.getFullYear();
  month.innerHTML = today.getMonth() + 1;
  date.innerHTML = today.getDate();

  function addZero(num) {
    return num < 10 ? "0" + num : "" + num;
  }
}

function init() {
  time();
  setInterval(time, 1000);
}
init();
