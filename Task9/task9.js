//This function return an array of arrays into a single
//array that has all the elements of the input arrays
function flatter(array) {
    return array.reduce(function (result, current) {
        return result.concat(current);
    });
}
