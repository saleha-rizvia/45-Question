var alienColors = ['red', 'blue', 'green', 'yellow'];
var randomIndex = Math.floor(Math.random() * alienColors.length);
var alienColor = alienColors[randomIndex];
console.log("the alien's color is:", alienColor);
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alienColor === 'green') {
    console.log('The player  earned 5 points for shooting the green alien');
}
else {
    console.log('The player earned 10 points for shooting another alien');
}
