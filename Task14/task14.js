//Builds a string whose value is the
//string argument repeated times number of times
function repeat(string, times) {
    var result = '';
    for (var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

//A stretchCell constructor
function textCell(text) {
    this.text = text.split('\n');
}

//returns a number indicating this
//cell’s minimum width (in characters)
textCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};

// returns a number indicating the minimum
//height this cell requires (in lines)
textCell.prototype.minHeight = function() {
    return this.text.length;
};

//Returns an array of length height, which contains
//a series of strings that are each width characters wide.
//This represents the content of the cell
textCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};

//A stretchCell constructor, which takes a
//inner, width and height as a arguments
function stretchCell(inner, width, height){
    this.inner = inner;
    this.width = width;
    this.height = height;
}

//The minWidth method, which returns
//the maximum length of rows in a cell
stretchCell.prototype.minWidth = function () {
    var minWidth = this.inner.minWidth();
    if (minWidth >= this.width) {return minWidth;}
    else {return this.width;}
};

//The minHeight method, which returns
//the number of rows in a cell
stretchCell.prototype.minHeight = function () {
    var minHeight = this.inner.minHeight();
    if (minHeight >= this.height) {return minHeight;}
    else {return this.height;}
};

//The draw method, which returns an array of length height,
//which contains a series of strings that are each width
//characters wide. This represents the content of the cell
stretchCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.inner.text[i] || '';
        result.push(line + repeat(' ', width - line.length));
    }
    return result;
};
