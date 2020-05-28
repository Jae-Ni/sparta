const btn = document.querySelector(".btn");
let name = document.getElementById("name");
let cnt = document.getElementById("cnt");
let number = document.getElementById("number");
let adr = document.getElementById("address");

function handleClick(event) {
  if (
    name.value == "" ||
    cnt.value == "0" ||
    number.value == "" ||
    adr.value == ""
  ) {
    alert("빠짐없이 입력해 주세요");
  } else {
    alert("주문이 완료되었습니다. 조심하세요!");
    console.log(name.value);
    console.log(cnt.value);
    console.log(adr.value);
    console.log(number.value);
  }
  $.ajax({
    type: "GET",
    url: "https://api.manana.kr/exchange/rate.json",
    data: {},
    success: function (response) {
      const value = response[1]["rate"];
      console.log(value);
      $("#money").text(value);
    },
  });
}

function init() {
  btn.addEventListener("click", handleClick);
}

init();
