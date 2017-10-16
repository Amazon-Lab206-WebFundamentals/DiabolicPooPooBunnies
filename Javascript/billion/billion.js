var pay;
var day = 1;
for (pay = 0.01; day < 31; day++) {
    if (day == 1) {
        continue;
    }
    pay = pay * 2;
}
console.log(pay)