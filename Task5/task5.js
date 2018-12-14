// This function returns an array containing
//all the numbers from start up to (and including) end
function range(start, end, step) {
    step = step || 1;
    var result = [];
    var i = start, index = 0;

    if (start < end){
        for (; i <= end; i+= step, index++){
            result[index] = i;
        }
    }
    else {
        for (; i >= end; i += step, index++) {
            result[index] = i;
        }
    }

    return result;
}

//This function takes an array of numbers
//and returns the sum of these numbers
function sum(numbers){
    var result = 0;
    for (var i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return result;
}
