


$(".deduction").click(function(){
  $(".amount")[0].value=+$(".amount")[0].value - 1;
  stop();
})
$(".add").click(function(){
  $(".amount")[0].value=+$(".amount")[0].value + 1;
})
 function stop(){
  if(+$(".amount")[0].value<=1){
    $(".amount")[0].value=1
  }

  }
