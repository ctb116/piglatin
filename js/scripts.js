//Backend
var vowels = ["a", "e", "i", "o", "u", "y"];

function firstStep(string) {
  var piglatin;

    if (vowels.includes(string.charAt(0))) {
     piglatin = string + "way";
    } else {
      consonants(string);
    }

  function consonants(string) {
    // for (var index = 0; index < string.length; index+=1);
      if (string.indexOf(string.match(vowels))) {
        var hasvowels = string.indexOf(vowels);
        alert(hasvowels);
      } else {
        alert("there are no vowels");
      }
  }
    console.log(piglatin);
  }

  // string.substring(0, vowels);
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

  firstStep(userInput)


  // $(".output").text(piglatin);
  // $(".output").text(con);

  });
});
