///5.2-1
// let x = +prompt("Введите x", "");
// let y = +prompt("Введите y", "");

// alert(x + y);

///5.2-3
function readNumber() {
    let num;
    do {
        num = 1 /*+prompt("число", "");*/
    } while (!(isFinite(num)))

    if (num === null || num === "") {
        return null;
    }
    return num;
}

console.log(readNumber());

///5.2-4
//теряется точность из-за дроби. то есть i равен 10 никогда не будет, поэтому цикл бесконечный

///5.2-5
function random(min, max) {
    return Math.random() * (max - min) + min;;
}

console.log(random(1, 5));

///5.2-6
function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min));
}
console.log(randomInteger(1, 5));
