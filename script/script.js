new Dot();
dots.push(d);
}

// This is the screen redraw function
function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
	y = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function(dot, index, dots) {
	var nextDot = dots[index + 1] || dots[0];

	dot.x = x;
	dot.y = y;
	dot.draw();
	x += (nextDot.x - dot.x) * .6;
	y += (nextDot.y - dot.y) * .6;

    });
}

addEventListener("mousemove", function(event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
    draw();
    requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();