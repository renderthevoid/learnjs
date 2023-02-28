function aclean(arr) {
    let map = new Map();
    arr.forEach(item => {
        let destruct = item.toLowerCase().split("").sort().join("");
        map.set(destruct, item);
    });
    return Array.from(map.values());
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"