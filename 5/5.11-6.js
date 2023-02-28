function getSecondsToday() {
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let result = date - today;
    return Math.round(result / 1000);
}

console.log(getSecondsToday());