var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var audioBlue = new Audio('sounds/blue.mp3')
var audioGreen = new Audio('sounds/green.mp3')
var audioRed = new Audio('sounds/red.mp3')
var audioYellow = new Audio('sounds/yellow.mp3')

 function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
 }

 function playSound(name){
      switch (name) {
        case "yellow" :
           audioYellow.play();
           break;
        case "blue":
            audioBlue.play();
            break;
        case "red":
            audioRed.play();
            break;
        case "green":
            audioGreen.play();
            break;
        default:
            break;
   }
}
$('.btn').click(function(){
     var userChosenColour = $(this).attr('id');
     userClickedPattern.push(userChosenColour);
     animatePress(userChosenColour);
     playSound(userChosenColour);
     nextSequence();
    
})

function animatePress(currentColour){
  $('.'+currentColour).addClass('pressed')
 setTimeout(function(){
     $('.'+currentColour).removeClass('pressed')
    },100)
}

$(document).keydown(function (e) { 
    
});(function (e) { 
    if (e.)
});    
