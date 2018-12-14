//Function returns true only when the predicate
//returns true for all elements of the array
function every(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (!func(array[i])) {return false;}
    }

    return true;
}

//Function returns true as soon as the predicate
//returns true for any of the elements
function some(array, func) {
    for (var i = 0; i < array.length; i++) {
        if (func(array[i])) {return true;}
    }

    return false;
}
