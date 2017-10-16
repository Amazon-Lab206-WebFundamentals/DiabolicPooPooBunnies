//i start with a penny
//double the amount every day
var earnings = .01;
var amount = .01;
for (var i = 2; i <= 100000; i++) {
    earnings = earnings * 2
    console.log("earnings", earnings)
    amount = amount + earnings
    console.log("amount", amount)
    if (amount == Infinity) {
        console.log(i)
        break
    }
}