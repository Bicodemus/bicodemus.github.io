$(document).ready(function(){
  var cats = true;
  var dogs = false;
  $.ajax({
    dataType: "json",
    url: "https://aws.random.cat/meow",
    success: function(result) {
      $("#pic").attr("src", result["file"]);
    },
    error: function(xhr,status,error) {
       console.log(error);
   }
 });
 $.ajax({
   url: "https://api.kanye.rest",
   success: function (result) {
     $("#kanye").text(result["quote"]);
   },
   error: function(xhr,status,error) {
         console.log(error);
  }
 });

$("#cat").on("click", function () {
  cats = true;
  dogs = false;
});

$("#dog").on("click", function () {
  cats = false;
  dogs = true;
});

 $("#clicker").on("click", function (){
   $.ajax({
     url: "https://api.kanye.rest",
     success: function (result) {
       $("#kanye").text(result["quote"]);
     },
     error: function(xhr,status,error) {
           console.log(error);
    }
   });
   if (cats){
     $.ajax({
       dataType: "json",
       url: "https://aws.random.cat/meow",
       success: function(result) {
         $("#pic").attr("src", result["file"]);
       },
       error: function(xhr,status,error) {
          console.log(error);
      }
    });
  } else if (dogs){
    $.ajax({
     dataType: "json",
     url: "https://random.dog/woof.json",
     success: function(results) {
       if (results["url"].endsWith(".mp4")) {
          $('#pic').attr("src", "https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg");
        } else {
          $('#pic').attr("src", results["url"]);
        }
     },
     error: function(xhr,status,error) {
       console.log(error);
     }
   });
  }
 });
});
