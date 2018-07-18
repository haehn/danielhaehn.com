var COLORWHEEL = COLORWHEEL || {};

COLORWHEEL.CRAZY_EYES = false;

COLORWHEEL.init = function() {

	//
	// this code is based on a much more complicated version of
	//   http://www.dematte.at/colorPicker/
	// good work brother!!
	//
	var colorwheel = document.getElementById('colorwheel');
	var colordisc = document.getElementById('surface');
	var eye = document.getElementById('eye');
	var eye_red = document.getElementById('eye_red');
	var daniel = document.getElementById('daniel');
	var crazy_daniel = document.getElementById('crazy_daniel');

	var colordisc_radius = colordisc.offsetHeight / 2;

	// draw color disc
	var x = colordisc.width / 2;
	var y = colordisc.height / 2;
	var a = x - 1;
	var b = y - 1;
	var ctx = colordisc.getContext("2d");

	ctx.save();
	ctx.translate(x - a, y - b);
	ctx.scale(a, b);

	var coef = Math.PI / 180;
	for(var angle = 360; angle > 0; angle -= 1) {
		ctx.beginPath();
		ctx.moveTo(1,1);
		ctx.arc(1, 1, 1, (angle - .5 - 1) * coef, (angle + .5 + 1) * coef);

		var gradient = ctx.createRadialGradient(1, 1, 1, 1, 1, 0);
		gradient.addColorStop(0, 'hsl(' + (360 - angle + 0) + ', 100%, 50%)');
		gradient.addColorStop(1, "#FFFFFF");

		ctx.fillStyle = gradient;
		ctx.fill();

	}
	ctx.restore();

	// draw outer circle
	ctx.save();
	ctx.translate(x - a, y - b);
	ctx.scale(a, b);
	ctx.beginPath();
	ctx.arc(1, 1, 1, (180 - 1) * coef, (540 + 1) * coef);
	ctx.restore();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#555';
	ctx.stroke();
	ctx.restore();

	colordisc.addEventListener('mousemove', function(e) {

		if (e.preventDefault) e.preventDefault();

		if (COLORWHEEL.CRAZY_EYES) {
			return false;
		}

		var r = colordisc_radius;
		var x = e.clientX - colordisc.getBoundingClientRect().left - r;
		var y = e.clientY - colordisc.getBoundingClientRect().top - r;
		var h = 360 - ((Math.atan2(y, x) * 180 / Math.PI) + (y < 0 ? 360 : 0));
		var s = (Math.sqrt((x * x) + (y * y)) / r) * 100;
		
		daniel.style.webkitFilter = 'hue-rotate('+(h-140)+'deg)';
		daniel.style.mozFilter = 'hue-rotate('+(h-140)+'deg)';

	});

	eye.addEventListener('click', function(e) {

		eye_red.style.display = 'block';
		eye.style.display = 'none';

		// activate crazy daniel
		crazy_daniel.style.display = 'block';

	});

	eye_red.addEventListener('click', function(e) {

		eye.style.display = 'block';
		eye_red.style.display = 'none';

		// deactivate crazy daniel
		crazy_daniel.style.display = 'none';

	});

};
