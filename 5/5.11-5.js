function getLastDayOfMonth(year, month) {
    let lastDay = new Date(year, month + 1);
    lastDay.setDate(lastDay.getDate() - 1);
    return lastDay.getDate();
}

console.log(getLastDayOfMonth(2023, 1));