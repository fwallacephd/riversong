//Global Variables
var score = 0;
var name = "";

//Hide Questions
$("#question1").hide();
$("#question2").hide();
$("#question3").hide();
$("#question4").hide();
$("#question5").hide();
$(".score").hide();

//Click on Take Quiz Button
$(".take-quiz").on("click", function(){
  $("#question1").show();
  $("#enter-quiz").hide();
  name = $("[name=name]").val();
  $(".your-name").hide();
});

//Question 1
$(".question1-submit").on("click", function(){
  var answer1 = $("[name=episode]:checked").val();
  if (answer1 === "Astronaut") {
    score ++;
    alert(name + ", Correct! You have " + score + " point(s) out of 5!");
    $("#question1").hide();
    $("#question2").show();
  } else {
    alert(name + ", Oops! That was incorrect. The answer is 'The Impossible Astronaut' You have " + score + " point(s) out of 5!");
    $("#question1").hide();
    $("#question2").show();
  }
});


//Question 2
$(".question2-submit").on("click", function(){
  var answer2 = $("[name=location]").val();
  console.log(answer2);
  if (answer2 === "3") {

    score ++;
    alert(name + ", Correct! And Stevie Wonder sang for River on that day. But you musn't ever tell him! You have " + score + " point(s) out of 5!");
    $("#question2").hide();
    $("#question3").show();
  } else {
    alert(name + ", Oops! That was incorrect. The answer is The Doctor took River ice skating on the Thames at the Frost Fair! You have " + score + " points(s) out of 5!");
    $("#question2").hide();
    $("#question3").show();
  }
});


//Question 3
$(".question3-submit").on("click", function(){
  var answer3 = $("[name=weapon]:checked").val();
  if (answer3 === "Lipstick") {
    score ++;
    alert(name + ", Correct! River uses hallucinogenic lipstick to when she needs to get out of trouble. You have " + score + " point(s) out of 5!");
    $("#question3").hide();
    $("#question4").show();
  } else {
    alert(name + ", Oops! That was incorrect. The answer is Lipstick. River uses hallucinogenic lipstick. You have " + score + " points(s) out of 5!");
    $("#question3").hide();
    $("#question4").show();
  }
});


//Question 4
$(".question4-submit").on("click", function(){
  var answer4 = $("[name=episode2]").val();
  if (answer4 === "2") {
    score ++;
    alert(name + ", Correct! And this is the first time that Amy Pond met River Song. You have " + score + " point(s) out of 5!");
    $("#question4").hide();
    $("#question5").show();
  } else {
    alert(name + ", Oops! That was incorrect. The answer is Time of Angels. And this is first time that Amy Pond met River Song. You have " + score + " points(s) out of 5!");
    $("#question4").hide();
    $("#question5").show();
  }
});

//Question 5
$(".question5-submit").on("click", function(){
  var finalScore = "";
  var answer5 = $("[name=events]:checked").val();
  if (answer5 === "Jim") {
    score ++;
    alert(name + ", Correct! We never get to see Jim the Fish and his dam! You have " + score + " point(s) out of 5!");
    $("#question5").hide();
    $("#score").show();
  } else {
    alert(name + ", Oops! That was incorrect. The answer is Jim the Fish. He's mentioned a few times, but we never see him and his dam! You have " + score + " points(s) out of 5!");
    $("#question5").hide();
    $(".score").show();
  }
  if (score === 5) {
    finalScore = (name + ", You know River Song. Congrats! You got all the questions correct!");
  } else {
    finalScore = (name + ", your final score for this quiz is, " + score + ". You might want to do a River Song marathon.");
  }
  $(".score-statement").append(finalScore);
});


//Play Again
//$(".play-again").on("click", function(){

  //$("#enter-quiz").show();
  //$(".your-name").show();
//});
