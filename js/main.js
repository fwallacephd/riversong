//Global Variables
var score = 0;

//Hide Questions
$("#question1").hide();

//Click on Take Quiz Button
$(".take-quiz").on("click", function(){
  $("#river-image").hide();
  $("#question1").show();
});

//Question 1
$(".question1-submit").on("click". function(){
  var answer1 = $("[name=episode]:checked").val();
  if (answer1 === "Astronaut") {
    score += 1;
    alert("Correct! You have " + score + " point(s) out of 5!")
  } else {
    alert("Oops! That was incorrect. You have " + score + " point(s) out of 5!")
  }
});
