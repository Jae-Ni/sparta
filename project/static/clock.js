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
  hours.innerHTML = today.getHours();
  minutes.innerHTML = today.getMinutes();
  seconds.innerHTML = today.getSeconds();

  day.innerHTML = dayList[today.getDay()];
  year.innerHTML = today.getFullYear();
  month.innerHTML = today.getMonth() + 1;
  date.innerHTML = today.getDate();

  //   clockContainer.innerText =
  //     `${hours < 10 ? `0${hours}` : hours}:${
  //       minutes < 10 ? `0${minutes}` : minutes
  //     }:${seconds < 10 ? `0${seconds}` : seconds}` +
  //     `${month + 1}월 ${date}일 ${dayList[day]}`;
}

function init() {
  time();
  setInterval(time, 1000);
}
init();
