function getWeekDay(date) {
    let dates = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return dates[date.getDay()];
}
let date = new Date(2012, 0, 3);
console.log(getWeekDay(date));