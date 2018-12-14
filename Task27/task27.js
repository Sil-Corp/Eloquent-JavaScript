// Task27

// Function takes a DOM node
// and creates a tabbed interface
// showing the child elements of that node
function asTabs(node) {
    var child = node.querySelectorAll('div');

    // Creating buttons for each div
    for (var i = child.length - 1; i >= 0; i--) {
        var butn = document.createElement('button');

        //Create an event for a button
        butn.addEventListener('click', function (ev) {
            var buttons = node.querySelectorAll('button');
            buttons.forEach(function (item) {
                item.style.color = '';
            });

            var btn = ev.target;
            var btnText = btn.textContent;

            btn.style.color = 'red';

            var content = node.querySelectorAll('div');
            content.forEach(function (item) {
                if (item.dataset.tabname === btnText){
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });

        });
        butn.textContent = child[i].getAttribute('data-tabname');
        node.insertBefore(butn, node.firstChild);
        child[i].style.display = 'none';
    }

    var event = new Event('click');
    node.querySelector('button').dispatchEvent(event);
}
