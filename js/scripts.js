//Backend
// var vowels = ["a", "e", "i", "o", "u", "y"];
//   var piglatin = [];

//   function firstStep(array) {
//     var translatedArray = []
//
//   }
//
//   array.forEach(function(vowels) {
//     console.log(vowels + "way");
// });
//   for (var index = 0; index < firstLetter.length; index+=1) {
//     var first = firstLetter[-1,1];
//     if (first.match(/[aeiou]/g)); {
//       piglatin = firstLetter + "way"
//     }
//
//   }
//   console.log(piglatin);
// }


  //   if (vowels.includes(string.charAt(0))) {
  //    piglatin = string + "way";
  //   } else {
  //     consonants(string);
  //   }
  //
  // function consonants(string) {
  //   // for (var index = 0; index < string.length; index+=1);
  //     if (string.indexOf(string.match(vowels))) {
  //       var hasvowels = string.indexOf(vowels);
  //       alert(hasvowels);
  //     } else {
  //       alert("there are no vowels");
  //     }
  // }
  //   console.log(piglatin);
  // }

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

  var firstInput = $("#inputText").val();
  var userInput = firstInput.split(" ");

  console.log(userInput);

  userInput.forEach(function(vowel) {
    var list = ["a", "e", "i", "o", "u"]
    if (list.includes(vowel.charAt(0))) {
            console.log(vowel + "way");
    } else {
      console.log("no");
    }

  });

  // console.log(userInput);

  // $(".output").text(piglatin);
  // $(".output").text(con);

  });
});
