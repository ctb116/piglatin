//Backend
var vowels = ["a", "e", "i", "o", "u"];

function firstVowel(string) {
  // for (var i = 0; i < userInput.length; i++) {
    if (vowels.includes(string.charAt(0))) {
      return true;
    } else {
      return false;
    }
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
