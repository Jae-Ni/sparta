function q1() {
  let target_num = $("#magicnum").val();

  if (target_num == "") {
    alert("숫자를 입력하세요");
    return;
  }

  let target_url = "http://numbersapi.com/" + target_num;
  $.ajax({
    type: "GET",
    url: target_url,
    data: {},
    success: function (response) {
      $("#meaning").text(response);
      console.log(response);
    },
  });
}
