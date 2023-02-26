///5.3-3
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, 19).concat("...");
    }
    return str;
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));