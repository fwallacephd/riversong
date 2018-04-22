//Global Variables
var score = 0;

//Hide Questions
$("#question1").hide();
$("#question2").hide();
$("#question3").hide();

//Click on Take Quiz Button
$(".take-quiz").on("click", function(){
  $("#question1").show();
  $("#enter-quiz").hide();
});

//Question 1
$(".question1-submit").on("click", function(){
  var answer1 = $("[name=episode]:checked").val();
  if (answer1 === "Astronaut") {
    score ++;
    alert("Correct! You have " + score + " point(s) out of 5!");
    $("#question1").hide();
    $("#question2").show();
  } else {
    alert("Oops! That was incorrect. The answer is 'The Impossible Astronaut' You have " + score + " point(s) out of 5!");
    $("#question1").hide();
    $("#question2").show();
  }
});


//Question 2
$(".question2-submit").on("click", function(){
  var answer2 = $("[name=name]").val();
  if (answer2 === "3") {
    score ++;
    alert("Correct! And Stevie Wonder sang for River on that day. But you musn't ever tell him! You have " + score + " point(s) out of 5!");
    $("#question2").hide();
    $("#question3").show();
  } else {
    alert("Oops! That was incorrect. The answer is The Doctor took River ice skating on the Thames at the Frost Fair! You have " + score + " points(s) out of 5!");
    $("#question2").hide();
    $("#question3").show();
  }
});


//Question 3
$(".question3-submit").on("click", function(){
  var answer3 = $("[name=weapon]:checked").val();
  if (answer3 === "Lipstick") {
    score ++;
    alert("Correct! River uses hallucinogenic lipstick to when she needs to get out of trouble. You have " + score + " point(s) out of 5!");
    $("#question3").hide();
    $("#question4").show();
  } else {
    alert("Oops! That was incorrect. The answer is Lipstick. River uses hallucinogenic lipstick. You have " + score + " points(s) out of 5!");
    $("#question3").hide();
    $("#question4").show();
  }
});
