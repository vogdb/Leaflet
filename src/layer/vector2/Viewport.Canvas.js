
L.Browser.canvas = (function () {
	return !!document.createElement('canvas').getContext;
}());

L.Viewport.Canvas = L.Viewport.extend({

	initRoot: function () {
		this._root = document.createElement("canvas"),

		var ctx = this._ctx = root.getContext('2d');
		ctx.lineCap = ctx.lineJoin = "round";
	},

	update: function () {
		if (this._zooming) { return; }

		this.updateBounds();

		var bounds = this._bounds,
			min = bounds.min,
			size = bounds.max.subtract(min),
			root = this._root;

		L.DomUtil.setPosition(root, min);

		root.width = size.x;
		root.height = size.y;
		root.getContext('2d').translate(-min.x, -min.y);
	}
})
