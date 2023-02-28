function getLocalDay(date) {
    let result = date.getDay();

    if (result == 0) {
        result = 7;
    }
    return result;
}

// let date = new Date(2012, 0, 3)
let date = new Date(2023, 1, 26); 
console.log(getLocalDay(date)); 