//Backend
var vowels = ["a", "e", "i", "o", "u"];

var firstVowel = function(userInput) {
  alert("backend works")

}

// for (var index = 0; index = 1; index += 1) {
//   var firstvowel = (userInput + "way");
//
// }



//Frontend
$(document).ready(function(){
  $("form#submitForm").submit(function(event) {
  event.preventDefault();

  var userInput = $("input#inputText").val();

  var result = firstVowel(userInput)





  $(".output").text(result);

  });
});
