//Task 24
//1 more comment lines...
var Height = window.innerHeight;
var Width = window.innerWidth;
var angle = 0, lastTime = null;

//Animation of a cat and his hat
// Hat is circling around the cat
function animate(time){
    if (lastTime != null){
        angle += (time - lastTime) * 0.002;
    }
    lastTime = time;

    var R = 60;
    var Sin = Math.sin(angle);
    var Cos = Math.cos(angle);

    cat.style.top = (Sin * R + (Height / 2)) + 'px';
    cat.style.left = (Cos * R + (Width/ 2)) + 'px';
    var catPos = cat.getBoundingClientRect();
    hat.style.top = (2 * R * Sin  + catPos.top) + 'px';
    hat.style.left = (2.5 * R * -Cos + catPos.left) + 'px';

    requestAnimationFrame(animate);
}
