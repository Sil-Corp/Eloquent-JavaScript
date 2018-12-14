//Task 23
//Takes a node and a string (the tag name) as
// arguments and returns an array containing
// all descendant element nodes with the given tag name
function byTagName(node, tagName) {
    var Result = [];
    if (node === null) {
        return Result;
    }
    tagName = tagName.toUpperCase();
    var item = node.firstChild;
    if (item !== null) {
        while (item !== null) {
            var itemTagName = item.tagName;
            if (itemTagName !== undefined && itemTagName === tagName) {
                Result.push(item);
            }
            if (item.firstChild !== null) {
                Result = Result.concat(byTagName(item, tagName));
            }
            item = item.nextSibling;
        }
    }
    return Result;
}
