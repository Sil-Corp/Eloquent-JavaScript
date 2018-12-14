//This function return new array that
//has the same elements in the inverse order
function reverseArray(array) {
    var result = [];
    for (var i = 0; i < array.length; i++){
        result[i] = array[array.length - i - 1];
    }
    return result;
}

//This function modifies the array
//given as argument in order to reverse its elements
function reverseArrayInPlace(array) {
    for (var i = 0; i < array.length / 2; i++){
        var reverse = array.length - 1 - i;
        var value = array[i];
        array[i] = array[reverse];
        array[reverse] = value;

    }
}
