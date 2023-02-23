//проверка логина

let password = prompt("Введите пароль");

if (password === "Я главный") {
    alert("Здравствуйте")
} else if (password.length >= 1) {
    alert("Неверный пароль")
} else {
    alert("Отменено");
}
