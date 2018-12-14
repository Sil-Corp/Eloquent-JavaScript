//This function creates a List data structure
//when an array is specified as an argument
function arrayToList(array) {
    var list = {
        value: array[array.length - 1],
        rest: null
    };
    for (var i = array.length - 2; i >= 0; i--){
        list = prepend(array[i], list);
    }
    return list;
}

//This function produces a List from an array
function listToArray(list) {
    var result = [];

    for (var i = 0; nth(list, i) !== undefined; i++){
        result[i] = nth(list, i);
    }
    return result;
}

//This function takes an element and a list and creates a new list
//that adds the element to the front of the input list
function prepend(value, list) {
    var result = list;
    return {
        value: value,
        rest: result
    };
}

//This function takes a list and a number and returns
//the element at the given position in the list
function nth(list, number){
    if (number === 0){return list.value;}
    var result = list.rest;
    if (result === null){return undefined;}
    return nth(list.rest, number - 1);
}
