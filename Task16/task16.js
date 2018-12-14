//This is exception
function multiplicatorUnitFailure() {}

//In 50 percent of cases, multiplies two numbers,
//and in the other 50 percent, raises an exception
function primitiveMultiply(a, b) {
    if (Math.random() < 0.5){
        return a * b;
    }
    else{
        throw new multiplicatorUnitFailure();
    }
}

//Keeps trying primitiveMultiply function until a call succeeds
function reliableMultiply(a, b) {
    for (; ;) {
        try {
            return primitiveMultiply(a, b);
        }
        catch (e) {
            if ( !(e instanceof multiplicatorUnitFailure) ){
                throw e;
            }
        }
    }

}
