///5.4-4
let arr = [];
let number;

do {
    number = +prompt("число", "");
    arr.push(number);
} while (isFinite(number));

document.innerHTML = arr;