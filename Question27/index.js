var alienColors = ['red', 'blue', 'green', 'yellow'];
var randomIndex = Math.floor(Math.random() * alienColors.length);
var alienColor = alienColors[randomIndex];
console.log("the alien's color is:", alienColor);
// next part
if (alienColor === "green") {
    console.log("The player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("The player earned 15 points.");
}
else {
    console.log("Invalid alien color.");
}
