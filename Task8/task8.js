//This function takes two values and returns true only if
//they are the same value or are objects with the same properties
//whose values are also equal when compared with a recursive call to deepEqual
function deepEqual(valueOne, valueTwo) {
    if (valueOne === valueTwo) {return true;}

    if (typeof valueOne !== typeof valueTwo) {return false;}

    if (valueOne === null || valueTwo === null) {return false;}

    if (typeof valueOne === 'object'){
         for (var key in valueOne){
            if (!deepEqual(valueOne[key], valueTwo[key])) {return false;}
        }
    }

    if (valueOne !== valueTwo &&
        (typeof valueOne !== 'object')) {

        return false;
    }

    return true;
}
