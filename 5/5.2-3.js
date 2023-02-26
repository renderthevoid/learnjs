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
