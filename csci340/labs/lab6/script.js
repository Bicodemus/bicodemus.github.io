$(document).ready(function(){
 $("#testing").on("click", function (){
   $.ajax({
     url: "https://api.kanye.rest",
     success: function (result) {
       $("#testing").text(result["quote"]);
     },
     error: function(xhr,status,error) {
           console.log(error);
    }
   });
   $.ajax({
     ult: "https://pixabay.com/api/?key=14140721-b59535f9f2cb06a4c44807198&category=travel",
     dataType: "json",
     success: function(results) {
       $("#pix").attr("src", results["largeImageURL"])
     },
     error: function(xhr,status,error) {
        console.log(error);
    }
  });
 });
});
