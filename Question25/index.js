// Imagine an alien was just shot down in a game. Create a variable called 
// alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alienColors = ['red', 'blue', 'green', 'yellow'];
var randomIndex = Math.floor(Math.random() * alienColors.length);
var alienColor = alienColors[randomIndex];
console.log("the alien's color is:", alienColor);
//  Write an if statement to test whether the alien’s color is green.
//  If it is, print a message that the player just earned 5 points.
if (alienColor === "green") {
    console.log('the alien color is', alienColor);
}
else if (alienColor === 'red') {
    console.log('The alienColor is', alienColor);
}
else if (alienColor === 'blue') {
    console.log('the alien color is', alienColor);
}
else if (alienColor === 'yellow') {
    console.log('the alien color is', alienColor);
}
else {
    console.log('the alien color is', alienColor + 'but not green');
}
// version 2
if (alienColor === 'green' || alienColor === 'yellow' ||
    alienColor === 'blue' || alienColor === 'red') {
    console.log('the alien color is', alienColor);
}
else {
    console.log('the alien color is', alienColor + 'but not green');
}
