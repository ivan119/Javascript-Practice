// Your age in Days

//Function that calculates how many days you are old
function ageInDays(){

    var birthYear = prompt('What year were you born?');
    var ageInDayz = (2019 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayz + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

//Function that resets 
function reset(){
    document.getElementById('ageInDays').remove();
}

//Function that generate cat
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://i.giphy.com/media/3MflvkDGeIQmUH88ff/giphy.webp/media/3MflvkDGeIQmUH88ff/giphy.gif";
    div.appendChild(image);

}

//Function Rock,Paper,Scissors
function rpsGame(yourChoise) {
    var humanChoice, botChoice;
    // humanChoice = yourChoise.id;
    // botChoice = 
    // results = decideWinner(humanChoice,botChoice);
    //  message = finalMassage(results); // You won!
    
}