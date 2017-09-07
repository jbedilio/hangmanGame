$(document).ready(function (){

var wins = 0;
var losses = 0;
var score = 0;

//var word = [ "hi", "what", "how", "when", "why"];
var word = ["when"];

function selector(word) {
    var selected = Math.floor(Math.random() * word.length);
    console.log('1', selected);
    var chosen = word[selected];
    console.log('2', chosen);
    return chosen;
}

function dash(chosen) {
    console.log('3', chosen);
    var display = [];
    for(var j = 0; j < chosen.length; j++) {
        display.push('_');
        console.log('4', display);
    }
    return display;
}

function displayWord (display) {
    console.log(display);
    var pretty = display.join(" ");
    console.log(pretty);
    $('.word-display').html(pretty);
}

var chosen = selector(word);

var display = dash(chosen);

displayWord(display);

$(document).on('keyup', function(event) {
    console.log(event.key);
})

});