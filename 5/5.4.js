///5.4-1
//4 выведет

///5.4-2
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift(0));
styles.unshift("Рэп", "Рэгги");
console.log(styles);

///5.4-3

///5.4-4
let arr = [];
let number;

do {
    number = +prompt("число", "");
    arr.push(number);
} while (isFinite(number));

document.innerHTML = arr;