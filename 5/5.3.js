///5.3-1
function ucFirst(word) {
    return word.replace(word[0], word[0].toUpperCase());
}

console.log(ucFirst("вася"));

///5.3-2
function checkSpam(str) {
    let string = str.toLowerCase();
    return string.includes("xxx") || string.includes("viagra");
}
console.log(checkSpam("xxx po"));
console.log(checkSpam("viagra po"));
console.log(checkSpam("po"));

///5.3-3
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, 19).concat("...");
    }
    return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

///5.3-4
function extractCurrencyValue(str) {
   return str.slice(1);
}
console.log(extractCurrencyValue('$120'))