$(".like").click(function (){
  $("#card-0").addClass("yes");
   $(".status").addClass("statusYes");
  window.setTimeout(function () {
    $("#card-0").remove();
    $(".status").removeClass("statusYes");
  }, 600);
  
  $("#card-1").attr("id","card-0");
  $("#card-2").attr("id","card-1");
   $("#card-3").attr("id","card-2");
});

$(".disLike").click(function (){
  $("#card-0").addClass("no");
  $(".status").addClass("statusNo");
  window.setTimeout(function () {
    $(".status").removeClass("statusNo");
    $("#card-0").remove();
  }, 600);
  $("#card-1").attr("id","card-0");
  $("#card-2").attr("id","card-1");
   $("#card-3").attr("id","card-2");
});