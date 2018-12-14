//Task 22
// Function that given an array of objects that all have the same
// set of properties, builds up a DOM structure representing a table
function buildTable(data) {
    var Table = document.createElement('table');
    var Head = document.createElement('tr');
    Object.keys(data[0]).forEach(function (item) {
    var th = document.createElement('th');
        th.textContent = item;
        Head.appendChild(th);
    });
    Table.appendChild(Head);

    for (var i = 0; i < data.length; i++){
        var row = document.createElement('tr');
        var keys = Object.keys(data[i]);
        keys.forEach(function (item) {
            var value = document.createElement('td');
            value.textContent = data[i][item];
            row.appendChild(value);
        });
        Table.appendChild(row);
    }

    //Right-align cells containing numbers
    var Digit = Table.getElementsByTagName('td');
    Array.prototype.forEach.call(Digit, function (value) {
        if (!isNaN(value.textContent)){
            value.style.textAlign = 'right';
        }
    });

    return Table;
}
