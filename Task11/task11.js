//The function returns the average
// value of all array elements
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

//Function computes and returns the average age of
//the people in the ancestry data set per century
function getStatistic() {
    var result = [];
    var mapOfGroups = groupBy(ancestry, function (person) {
        return Math.ceil(person.died / 100);
    });

    for (var value in mapOfGroups) {
        mapOfGroups[value] = average(mapOfGroups[value].map(function (item) {
            return item.died - item.born;
        }));
        result.push(value +': '+ mapOfGroups[value]);
    }

    return result;
}

//Function takes array and a function that computes
//the group for an element in the array and returns
//an object that maps group names to arrays of group members
function groupBy(array,func){
    var result = {};

    for (var i = 0; i < array.length; i++){
        var value = func(array[i]);
        if ( !(value in result)){
            result[value] = [];
        }
        result[value].push(array[i]);
    }

    return result;
}
