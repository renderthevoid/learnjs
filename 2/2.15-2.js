checkAge(17);
/*1*/ function checkAge(age) {
    return age > 18 ? true : console.log("Родители разрешили?");
}
/*2*/ function checkAge(age) {
    return (age > 18) || console.log("Родители разрешили?");
}