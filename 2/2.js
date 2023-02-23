


///2.8-1
//a,b,c=2
//d=1 постфикс

///2.8-2
//a=4, x=5

///2.8-3
//1. 10
//2. -1
//3. 1
//4. 2
//5. 6
//6. 9px
//7. $45
//8. 2
//9 nan
//10. -9   5
//11. -14
//12. 1
//13. nan
//14. -2

///2.9-1

//1. true
//2. false
//3. true
//4. true
//5. false
//6 и 7 false

//2.10-2

function doYouKnowName(name) {
    if (name === "ECMAScript") {
        return "Верно";
    } else {
        return `Не знаете? ${'ECMAScript'}`
    }
    
}

console.log(doYouKnowName("ECMA"));


///2.10-3
// let number = prompt("Введите число");

// if (number > 0) {
//     alert(1);
// } else if (number < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

///2.10-4

let a = b = 4;
let result = a + b < 4 ? "Мало" : "Много";
console.log(result);


///2.10-5
let login = "Директор";
let message = (login === "Сотрудник") ? "Привет" : (login === "Директор") ? "Здравствуйте" : (login === "") ? "Нет логина" : "";
console.log(message);


///2.11-1 - 2
///2.11-2 - alert(1), далее 2
//2.11-3 - null
//2.11-4 - alert(1)
//2.11-5 - 3
//2.11-6 

let age = 100;
if (age >= 14 && age <= 90) {
    console.log("В диапазоне");
} else {
    console.log("нет");
}

//2.11-7

//1
if (!(age >= 14 && age <= 90)) {
    console.log("Всё ок");
} else {
    console.log("не ок");
}

if (age < 14 && age > 90) {
    console.log("Всё ок");
} else {
    console.log("не ок");
}


//проверка логина

// let password = prompt("Введите пароль");

// if (password === "Я главный") {
//     alert("Здравствуйте")
// } else if (password.length >= 1) {
//     alert("Неверный пароль")
// } else {
//     alert("Отменено");
// }


///2.13-1
//0 после нуля цикл работать не будет

///2.13-2
//префиксный формат выведет 1,2,3,4
//постфиксный формат выведет 1,2,3,4,5

///2.13-3
//циклы выведут одинаковые значения

///2.13-4
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
    
// }
///2.13-5
// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}`);
//     i++;
// }

///2.13-6
// let number;
// do {
//     number = prompt("Введи число");
// } while (number < 100);

///2.13-7
let n = 10;
number:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if ((i % j == 0)) {
            continue number;
        }
    } 
    console.log(i);
}

///2.14-1
let browser = "IE";

if (browser === "Edge") {
    console.log("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}
///2.14-2
const number = 2;

switch(number) {
    case 0:
        console.log("Ввели 0");
    case 1:
        console.log("Ввели 1");
    case 2:
        console.log("Ввели 2");
}

///2.15-1
//работает одинаково все ок

///2.15-2
checkAge(17);
/*1*/ function checkAge(age) {
    return age > 18 ? true : console.log("Родители разрешили?");
}
/*2*/ function checkAge(age) {
    return (age > 18) || console.log("Родители разрешили?");
}

///2.15-3
console.log(min(5,-1));
function min(a, b) {
    return a > b ? b : a;
}
///2.15-4
console.log(pow(3, 2.2));
function pow(x, n) {
    if ((n % 1 != 0) || (n < 1)) {
        return "Здесь так не принято";
    } else {
        let i = 0;
        let res = 1;
        while (i < n) {
            res *= x;
            i++;
        }
        return res;
    }
}

///2.17-1 
    let ask = (question, yes, no) => {
        return question ? yes : no;
    }
    console.log(ask("agree?", "yes", "no"));
