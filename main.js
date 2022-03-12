var startgame = $('#startgame');
var game = $('#game');
game.hide();

var noOfGuess;
var randomNumber;
var guesses = 0;
var left = 0
var i;

$('#hard').click(() => {
    startHardGame();
})
$('#easy').click(() => {
    startEasyGame();
})

function startHardGame() {
    startgame.hide();
    game.show();
    noOfGuess = 5;
    randomNumber = Math.floor((Math.random() * 100) + 1)
    left = noOfGuess - guesses;
    $('#moves-left').text(`${left} moves left`)
}

function startEasyGame() {
    startgame.hide();
    game.show();
    noOfGuess = 10;
    randomNumber = Math.floor((Math.random() * 100) + 1)
    left = noOfGuess - guesses;
    $('#moves-left').text(`${left} moves left`)
}

function guess(){
    var input = $('#guess').val();
    if(i == "done"){
        $('#my-guess').append(", "+input)
    }else{
        $('#my-guess').append(" "+input)
    }
    $('#guess').val('');
    guesses++;
    if(input < randomNumber){
        $('#res').css("color","red")
        $('#res').text('Your Number is Smaller Than The Number')
    }else if(input > randomNumber){
        $('#res').css("color","red")
        $('#res').text('Your Number is Bigger Than The Number')
    }
    
    if(input == randomNumber){
        alert("Hurray !! You Won the match")
        resetGame()
    }else if(guesses == noOfGuess){
        alert(`You Lost the number is ${randomNumber}`);
        resetGame()
    }
    left = noOfGuess - guesses;
    $('#moves-left').text(`${left} moves left`)
}

function resetGame(){
    location.reload();
}