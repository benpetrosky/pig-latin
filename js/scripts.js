// business logic
function translatePigLatin(str) {
  var vowels =["a", "e", "i", "o", "u"];
  var result = str.split("");

  if (vowels.includes(str.charAt(0))) {
    return str += "way";
  } else {
    for (var i = 0; i <str.length; i++) {
      if (!vowels.includes(str[i])) {
        // shift is like pop(). shift removes first item of array and returns that.
        result.push(result.shift());
      } else {
        result.push("ay");
        return result.join("");
      }
    }
  }
}

//user interface logic

$(document).ready(function() {
    $("form#pig-latin").submit(function(event) {
      event.preventDefault();
      var words = $("input#pig").val();
      var result = translatePigLatin(words);

      $(".return-pig").text(result);

      $("#result").show();



  });
});
