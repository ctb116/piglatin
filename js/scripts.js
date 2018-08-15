//Backend
var vowels = ["a", "e", "i", "o", "u"];

function firstVowel(string) {
  // var firstStep;
    if (vowels.includes(string.charAt(0))) {
      firstLetterVowel(string);
      // alert("this is working");
    } else {
      alert("consonants");
    }

  function firstLetterVowel(string) {
    // return (string + "way");
    alert("hurray vowel");
  }
}
  // function consonants(string) {
  //   alert("You got a con son")
  // }

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
