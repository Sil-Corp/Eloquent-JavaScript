//Contains an array with objects of persons
var ancestry = JSON.parse(ANCESTRY_FILE);

//The function returns the average
// value of all array elements
function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

//Map of names and objects of his persons
var byName = {};
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

//Average age difference between mothers and children
var differences = ancestry.map(function (person) {
    if (person.mother in byName) {
        return person.born - byName[person.mother].born;
    }
    return null;
}).filter(function (value) {
    return value !== null;
});
