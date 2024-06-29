const alienColors: string[] = ['red', 'blue', 'green', 'yellow'];
const randomIndex: number = Math.floor(Math.random() * alienColors.length);
const alienColor: string = alienColors[randomIndex];
console.log("the alien's color is:", alienColor);


// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.


if (alienColor === 'green') {
    console.log('The player  earned 5 points for shooting the green alien');
}
else {
    console.log('The player earned 10 points for shooting another alien');
}
// Write one version of this program that runs the if block and another that runs the else block.
// in version 1 it print green or if block run.
// in version 2 it print other colorsand else  block run.


if (alienColor === 'green') {
    console.log('The player  earned 5 points for shooting the green alien');
}
else {
    console.log('The player earned 10 points for shooting another alien');
}