function getSecondsToTomorrow() {
    let totalSecondsInADay = 86400;
    
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let result = -1 * (today - date);
    return totalSecondsInADay - Math.round((result) / 1000);
}

console.log(getSecondsToTomorrow());