//Backend
var vowels = ["a", "e", "i", "o", "u", "y"];

function firstVowel(string) {
  var piglatin = " ";

    if (vowels.includes(string.charAt(0))) {
     piglatin = string + "way";
    } else {
      alert("con con");
      // consonants(string);
    }

  // function consonants(string) {
  //   alert("dawdadawdwa");
  // }
  console.log(piglatin);
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

  firstVowel(userInput)


  // $(".output").text(piglatin);
  // $(".output").text(con);

  });
});
