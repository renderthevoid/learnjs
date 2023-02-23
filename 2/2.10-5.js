///2.10-5
let login = "Директор";
let message = (login === "Сотрудник") ? "Привет" : (login === "Директор") ? "Здравствуйте" : (login === "") ? "Нет логина" : "";
console.log(message);