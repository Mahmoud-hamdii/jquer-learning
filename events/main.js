$(document).ready(function () {
  $("button").click(function () {
    $("p").css("padding-left", "20px");
  });
  $("button").hover(
    function () {
      $("button").css("color", "blue");
    },
    function () {
      $("button").css("color", "red");
    }
  );
});
