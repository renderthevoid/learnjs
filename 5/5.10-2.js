let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 500
};

function topSalary(salaries) {
    let [top, name] = [0, null];
    for (let [key, salary] of Object.entries(salaries)) {
        if (salary > top) {
            [top, name] = [salary, key];
        }
    }
    return `${name} ${top}`;
}

console.log(topSalary(salaries));