// Task 26

// The function remove
// an object taken as a parameter.
function remove (obj) {
    setTimeout(function () {
        document.body.removeChild(obj);
    }, 300);
}

// The event creates an object
// and adds it to the document.
addEventListener('mousemove', function (ev) {
    var obj = document.createElement('div');
    obj.className = 'trail';
    obj.style.left = ev.pageX - 3 + 'px';
    obj.style.top = ev.pageY - 3 + 'px';
    obj.addEventListener('load', remove(obj));
    document.body.appendChild(obj);
});
