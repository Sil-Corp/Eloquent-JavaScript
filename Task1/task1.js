// Function return
// Triangle
function forLoop() {
    var result = '';
    for (var line = '#'; line.length < 8; line += '#') {
        result += (line + '\n');
    }

    return result;
}
