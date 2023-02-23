///4.1-1
let user = {
    name: "John",
    surname: "Smith",
};
user["name"] = "Pete";
delete user.name;
console.log(user);

///4.1-2
function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}
let schedule = {}
schedule.key = "key";
console.log(isEmpty(schedule));

///4.1-3
//да, так как const защищает переменную, а не объекты.

///4.1-4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0
for (salary in salaries) {
    sum += salaries[salary];
}
console.log(sum);

///4.1-5
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(menu) {
    for (key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2;
        }
    }
    return menu;
}
console.log(multiplyNumeric(menu));