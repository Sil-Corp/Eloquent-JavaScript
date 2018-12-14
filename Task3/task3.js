// Function return
// True or False
function isEven(number) {
    number = Math.abs(number);
    if (number === 0){return true;}
    if (number === 1){return false;}
    return isEven(number - 2);
}
