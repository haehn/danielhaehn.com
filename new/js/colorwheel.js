window.onload = function() {


	/* ---------------------------------- */
	/* ---- HSV-circle color picker ----- */
	/* ---------------------------------- */
	var hsv_map = document.getElementById('colorwheel'),
		hsv_mapCover = hsv_map.children[1], // well...
		hsv_mapCursor = hsv_map.children[2],
		hsv_barBGLayer = hsv_map.children[3],

		colorDisc = document.getElementById('surface'),
		colorDiscRadius = colorDisc.offsetHeight / 2,
		luminanceBar = document.getElementById('luminanceBar'),

		hsvDown = function(e) { // mouseDown callback
			var target = e.target || e.srcElement;

			if (e.preventDefault) e.preventDefault();

			currentTarget = target.id ? target : target.parentNode;
			// startPoint = Tools.getOrigin(currentTarget);
			console.log(e);
			currentTargetHeight = currentTarget.offsetHeight; // as diameter of circle

			// Tools.addEvent(window, 'mousemove', hsvMove);
			hsv_map.addEventListener('mousemove', hsvMove)
			hsv_map.className = 'no-cursor';
			hsvMove(e);
			startRender();
		},
		hsvMove = function(e) { // mouseMove callback
			var r, x, y, h, s,
				page = getPageXY(e);

			if(currentTarget === hsv_map) { // the circle
				r = currentTargetHeight / 2,
				x = page.X - startPoint.left - r,
				y = page.Y - startPoint.top - r,
				h = 360 - ((Math.atan2(y, x) * 180 / Math.PI) + (y < 0 ? 360 : 0)),
				s = (Math.sqrt((x * x) + (y * y)) / r) * 100;
				// myColor.setColor({h: h, s: s}, 'hsv');
				console.log(h,s)
			}
		},

		renderHSVPicker = function(color) { // used in renderCallback of 'new ColorPicker'
			var pi2 = Math.PI * 2,
				x = Math.cos(pi2 - color.hsv.h * pi2),
				y = Math.sin(pi2 - color.hsv.h * pi2),
				r = color.hsv.s * (colorDiscRadius - 5);

			hsv_mapCover.style.opacity = 1 - color.hsv.v;
			// this is the faster version...
			hsv_barWhiteLayer.style.opacity = 1 - color.hsv.s;
			hsv_barBGLayer.style.backgroundColor = 'rgb(' +
				color.hueRGB.r + ',' +
				color.hueRGB.g + ',' +
				color.hueRGB.b + ')';

			hsv_mapCursor.style.cssText =
				'left: ' + (x * r + colorDiscRadius) + 'px;' + 
				'top: ' + (y * r + colorDiscRadius) + 'px;' +
				// maybe change className of hsv_map to change colors of all cursors...
				'border-color: ' + (color.RGBLuminance > 0.22 ? '#333;' : '#ddd');
			hsv_barCursors.className = color.RGBLuminance > 0.22 ? hsv_barCursorsCln + ' dark' : hsv_barCursorsCln;
			if (hsv_Leftcursor) hsv_Leftcursor.style.top = hsv_Rightcursor.style.top = ((1 - color.hsv.v) * colorDiscRadius * 2) + 'px';
		};

	hsv_map.addEventListener('mousedown', hsvDown);
	// generic function for drawing a canvas disc
	var drawDisk = function(ctx, coords, radius, steps, colorCallback) {
			var x = coords[0] || coords, // coordinate on x-axis
				y = coords[1] || coords, // coordinate on y-axis
				a = radius[0] || radius, // radius on x-axis
				b = radius[1] || radius, // radius on y-axis
				angle = 360,
				rotate = 0, coef = Math.PI / 180;

			ctx.save();
			ctx.translate(x - a, y - b);
			ctx.scale(a, b);

			steps = (angle / steps) || 360;

			for (; angle > 0 ; angle -= steps){
				ctx.beginPath();
				if (steps !== 360) ctx.moveTo(1, 1); // stroke
				ctx.arc(1, 1, 1,
					(angle - (steps / 2) - 1) * coef,
					(angle + (steps  / 2) + 1) * coef);

				if (colorCallback) {
					colorCallback(ctx, angle);
				} else {
					ctx.fillStyle = 'black';
					ctx.fill();
				}
			}
			ctx.restore();
		},
		drawCircle = function(ctx, coords, radius, color, width) { // uses drawDisk
			width = width || 1;
			radius = [
				(radius[0] || radius) - width / 2,
				(radius[1] || radius) - width / 2
			];
			drawDisk(ctx, coords, radius, 1, function(ctx, angle){
				ctx.restore();
				ctx.lineWidth = width;
				ctx.strokeStyle = color || '#000';
				ctx.stroke();
			});
		};

	if (colorDisc.getContext) {
		drawDisk( // HSV color wheel with white center
			colorDisc.getContext("2d"),
			[colorDisc.width / 2, colorDisc.height / 2],
			[colorDisc.width / 2 - 1, colorDisc.height / 2 - 1],
			360,
			function(ctx, angle) {
				var gradient = ctx.createRadialGradient(1, 1, 1, 1, 1, 0);
				gradient.addColorStop(0, 'hsl(' + (360 - angle + 0) + ', 100%, 50%)');
				gradient.addColorStop(1, "#FFFFFF");

				ctx.fillStyle = gradient;
				ctx.fill();
			}
		);
		drawCircle( // gray border
			colorDisc.getContext("2d"),
			[colorDisc.width / 2, colorDisc.height / 2],
			[colorDisc.width / 2, colorDisc.height / 2],
			'#555',
			1
		);
	}




	/*
	 * This script is set up so it runs either with ColorPicker or with Color only.
	 * The difference here is that ColorPicker has a renderCallback that Color doesn't have
	 * therefor we have to set a render intervall in case it's missing...
	 * setInterval() can be exchanged to window.requestAnimationFrame(callBack)...
	 *
	 * If you want to render on mouseMove only then get rid of startRender(); in
	 * all the mouseDown callbacks and add doRender(myColor.colors); in all
	 * mouseMove callbacks. (Also remove all stopRender(); in mouseUp callbacks)
	*/
	var doRender = function(color) {
			renderHSVPicker(color);
			// colorModel.innerHTML = displayModel(color); // experimental
		},
		renderTimer,
		// those functions are in case there is no ColorPicker but only Colors involved
		startRender = function(oneTime){
				renderTimer = window.setInterval(
					function() {
						doRender(myColor.colors);
					// http://stackoverflow.com/questions/2940054/
					}, 13); // 1000 / 60); // ~16.666 -> 60Hz or 60fps
			
		},
		stopRender = function(){
			if (isColorPicker) {
				myColor.stopRender();
			} else {
				window.clearInterval(renderTimer);
			}
		};
		renderCallback = doRender;



	// ------------------------------------------------------ //
	// ------------------ helper functions ------------------ //
	// -------------------------------------------------------//

	function getPageXY(e) {
		return {
			X: e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
			Y: e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop
		};
	}


};