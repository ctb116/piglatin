$(document).ready(function(){
  $("form#submitForm").submit(function(event) {
  event.preventDefault();
  var userInput = $("input#inputText").val();
  $(".output").text(userInput + "way");



  });

// var vowels = ["a", "e", "i", "o", "u"];
// for (var index = 0; index = 1; index += 1) {
//   var vowels = ["a", "e", "i", "o", "u"];
//
// }



});
