(function(win, doc, nav) {
	var canvas = document.getElementById('canvas');

	var ctx = canvas.getContext('2d');

	var lGrd = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

	lGrd.addColorStop(0, '#ff0000');
	lGrd.addColorStop(.5, '#00ff00');
	lGrd.addColorStop(1, '#0000ff');
	ctx.fillStyle = lGrd;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
})(window, document, navigator)