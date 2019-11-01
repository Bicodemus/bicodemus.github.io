var count = 0;
console.log(count)
$("#light").on("click", function(){
  console.log("not working");
  var background = $("#light");
  if (count%3 == 0){
    background.css("background-color", "#00FF13")
  } else if (count%3 == 1) {
    background.css("background-color", "#FFFF00");
  } else {
    background.css("background-color", "#FF0000");
  }
  count ++;
});
