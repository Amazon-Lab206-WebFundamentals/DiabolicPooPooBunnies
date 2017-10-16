var daysUntilMyBirthday = 60;

while (daysUntilMyBirthday >= 0) {
    // If it's more than 30 days, print a sad message.
    if (daysUntilMyBirthday > 30) {
        console.log(daysUntilMyBirthday + " days until my birthday. Such a long time... :(");
    }
    // If it's less than 30 days, print a message that sounds excited!
    if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday >= 5) {
        console.log(daysUntilMyBirthday + "yay I am excited!");
    }
    // If it's less than 5 days, SCREAM IT!
    if (daysUntilMyBirthday < 5 && daysUntilMyBirthday > 0) {
        console.log(daysUntilMyBirthday + "Scream it bro!");
    }
    // ONCE IT'S YOUR BIRTHDAY HAVE PARTY!
    if (daysUntilMyBirthday == 0) {
        console.log(daysUntilMyBirthday + "Party time!");
    }
    daysUntilMyBirthday--;
}