
/**
 * prints range.  Goes up to but not including
 * @param {int} min 
 * @param {int} max 
 * @param {int} skip 
 */
function printRange(min, max, skip) {
    for (var i = min; i < max; i = i + skip) {
        console.log(i);
    }
    //*print min, i<max,++skip
}

printRange(2, 10, 2);