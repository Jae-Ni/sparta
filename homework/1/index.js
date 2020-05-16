const btn = document.querySelector(".btn");

function handleClick(event) {
  alert("주문이 완료되었습니다. 조심하세요!");
}

function init() {
  btn.addEventListener("click", handleClick);
}
init();
