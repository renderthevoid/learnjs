///5.3-2
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes("xxx") || lowerStr.includes("viagra");
}
console.log(checkSpam("xxx po"));
console.log(checkSpam("viagra po"));
console.log(checkSpam("po"));
