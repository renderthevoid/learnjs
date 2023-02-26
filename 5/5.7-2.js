function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let destruct = word.toLowerCase().split("").sort().join("");
        map.set(destruct, word);
    }
    return Array.from(map.values());
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"