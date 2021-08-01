var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []
var userClickedPattern = []
var started = false
var lvlNumb = 0

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + lvlNumb);
    nextSequence();
    started = true;
  }
});


$('.btn').click(function(){
     var userChosenColour = $(this).attr('id');
     userClickedPattern.push(userChosenColour);

     animatePress(userChosenColour);
     playSound(userChosenColour);

     checkAnswer(userClickedPattern.length-1);

  
    
})
function checkAnswer(currentLevel) { 
    
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
   if(gamePattern[currentLevel] === userClickedPattern[currentLevel] ){
       console.log('succsess')
  //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if(userClickedPattern.length == gamePattern.length){
       //5. Call nextSequence() after a 1000 millisecond delay.
       setTimeout(function(){
           nextSequence();
       },1000)
   }
   }
   
   else{
    // console.log('wrong');

    playSound('wrong');
    
    $('body').addClass('game-over');

    setTimeout(function(){
    $('body').removeClass('game-over');
      },200);
    $('#level-title').html('Game Over, Press Any Key to Restart');

    startOver()

   }
   
}
 function nextSequence(){
    userClickedPattern = [];
    lvlNumb++
    $('#level-title').html('Level ' + lvlNumb);

    var randomNumber = Math.floor(Math.random() * 3)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)

    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)

 }

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function animatePress(currentColour){
  $('#'+currentColour).addClass('pressed')
 setTimeout(function(){
     $('#'+currentColour).removeClass('pressed')
    },100)
}

function startOver(){
    lvlNumb = 0;
    gamePattern = [];
    started = false;
}



