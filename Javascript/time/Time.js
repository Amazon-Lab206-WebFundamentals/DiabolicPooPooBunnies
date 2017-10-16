var person = "Jack"
var me = "Jill"
console.log("Hello", person, "I am", me, ".");

var hour = 7;
var minute = 15;
var period = "PM"

if (minute > 30) {/*almost hour+1"*/
    console.log("it is almost", hour + 1)
}
else {
    console.log("it is just past", hour)
}
if (period = "PM") {
    console.log("in the evening")
}
else {
    console.log("in the morning")
}

// console.log("It is", condition hour period);
/*What about noon and midnight, and 11:31AM and 11:31PM*/