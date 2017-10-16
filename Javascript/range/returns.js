
/**
 * prints range.  Goes up to but not including
 * @param {int} min 
 * @param {int} max 
 * @param {int} skip 
 */
function printRange(min, max, skip) {
    var result = [];
    for (var i = min; i < max; i = i + skip) {
        // return i;
        result.push(i);
    }
    return result;
    //*print min, i<max,++skip
}

console.log(printRange(2, 10, 2));

// We only get the punch line, we don't hear anything said after it is returned. 
function tellMeAGoodJoke() {
    var jokeStr = "a";
    jokeStr = jokeStr + "b";
    return jokeStr;
    jokeStr += "c";   // This code never runs!
}

var joke = tellMeAGoodJoke();
console.log(joke);

// Maybe it's a good joke, but it's a BAD FUNCTION. You can't return twice!
function tellMeAnotherOne() {
    var aJoke = "How many surrealists does it take to screw in a lightbulb?";
    return aJoke;
    return " .... A fish.";                     // Wha? Oh I get it...but JavaScript won't.
} // Remember: you can’t return twice!