//Takes a sequence object and returns a
//string with its first five elements—or
//fewer, if the sequence has fewer than five elements.
function logFive(inner) {
    var result = '';
    for (var i = 0; i < 5; i++) {
        result += inner.current() + '\n';
        if (!inner.next()){
            break;
        }
    }
    return result;
}

//Constructor
function arraySeq(array) {
    this.array =  array;
    this.position = 0;
}

//Goes to the next item
arraySeq.prototype.next = function () {
    if (this.position >= this.array.length - 1){
        return false;
    }
    this.position++;
    return true;
};

//Returns current element
arraySeq.prototype.current = function () {
    return this.array[this.position];
};

//Goes to the previous item
arraySeq.prototype.prev = function () {
    if (this.position <= 0){
        return false;
    }
    this.position--;
    return true;
};

//Constructor
function rangeSeq(from, to) {
    this.array = [];
    this.position = 0;
    for (var i = from; i <= to; i++) {
        this.array.push(i);
    }
}

rangeSeq.prototype = Object.create(arraySeq.prototype);
