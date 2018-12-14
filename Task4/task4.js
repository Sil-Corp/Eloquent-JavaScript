//Counts 'B' in the string
function countBs(string) {
    return countChar(string, 'B');
}

//Counts your character
//in a string
function countChar(string, char) {
    var result = 0;

    for (var i = 0; i < string.length; i++){
        if (string[i] === char){ result++ ;}
    }
    return result;
}
