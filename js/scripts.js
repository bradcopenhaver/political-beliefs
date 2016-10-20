$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    $("#republican").hide();
    $("#democrat").hide();

    var result =0;

    result = result + parseInt($("#q1").val());
    result = result + parseInt($("#q2").val());
    result = result + parseInt($("#q3").val());
    result = result + parseInt($("#q4").val());

    if (result > 8) {
      $(".result").text("Republican");
      $("#republican").show();
      $(".output").show();
    }
    else if (result < 8 && result > 3) {
      $(".result").text("Democrat");
      $("#democrat").show();
      $(".output").show();
    }
    else {
      alert("Please select an answer for every question.");
    }
  });
});
