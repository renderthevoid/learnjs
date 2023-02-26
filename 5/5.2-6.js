///5.2-6
function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min));
}
console.log(randomInteger(1, 5));