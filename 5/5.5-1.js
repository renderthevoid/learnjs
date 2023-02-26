function camelize(str) {
    return str.split("-").filter((el) => el != "").map((item, i) => i === 0 ? item : item[0].toUpperCase() + item.slice(1)).join("");
}

console.log(camelize("раз-два-три"));
console.log(camelize("-webkit-transition"));
