//This module can convert month
// numbers (zero-based, as in the Date type)
// to names and can convert names back to numbers
var month = function (){
    var names = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September', 'November',
        'December'];

    return {
        name: function (number) {
            return names[number];
        },
        number: function (name) {
            return names.indexOf(name) + 1;
        }
    };
}();
