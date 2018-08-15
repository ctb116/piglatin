$(document).ready(function(){
  $("form#submitForm").submit(function(event) {
    event.preventDefault();
  var userInput = $("input#inputText").val();
  $(".output").text(userInput);



  });
});
