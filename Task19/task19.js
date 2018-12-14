//Replace all the dialogue quotes with
// double quotes, while keeping the single
// quotes used in contractions like aren’t.
function fixedText() {
    var text = "'I'm the cook,' he said, 'it's my job.'";
    return text.replace(/^'|\W'|'\W|'$/g, function (substring) {
        substring = substring.replace(/'/, '\"');
        return substring;
    });
}
