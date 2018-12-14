//A Vector constructor that
//takes the arguments x and y
function vector(x, y) {
    this.x = x;
    this.y = y;
}

//The plus method, which takes a vector as
//an argument and returns a new vector
//that stores in x and y the sum of two vectors
vector.prototype.plus = function (Vect) {
    return new vector(this.x + Vect.x, this.y + Vect.y);
};

//The minus method, which takes a vector as
//an argument and returns a new vector
//that stores in x and y the difference of two vectors
vector.prototype.minus = function (Vect) {
    return new vector(this.x - Vect.x, this.y - Vect.y);
};
//Getter "length", which returns the length of the vector
Object.defineProperty(vector.prototype, 'length', {
    get: function () {
        return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }});
