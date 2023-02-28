function formatDate(date) {
    let diff = (new Date() - date) / 1000;
    let format = n => n < 10 ? "0" + n : n;


    let day = format(date.getDate());
    let month = format(date.getMonth()+1);
    let year = format(date.getFullYear());
    let hour = format(date.getHours());
    let min = format(date.getMinutes());

    if (diff <= 1) {
        return `прямо сейчас`;
    } else if (diff <= 30) {
        return `${diff} секунд назад`;
    } else if (diff <= 3600) {
        return `${diff / 60} минут назад`;
    }

    return `${day}.${month}.${year} ${hour}:${min}`;
}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
