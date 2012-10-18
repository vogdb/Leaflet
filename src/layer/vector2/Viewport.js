
L.Viewport = L.Class.extend({

	options: {
		padding:  L.Browser.mobile ? Math.max(0, Math.min(0.5,
				(1280 / Math.max(window.innerWidth, window.innerHeight) - 1) / 2)) : 0.5,
	},

	initialize: function (map) {
		this._map = map;
		this._pane = map._panes.overlayPane;
	},

	updateBounds: function () {
		var p = this.options.padding,
			size = this._map.getSize(),
			viewPos = L.DomUtil.getPosition(this._map._mapPane).multiplyBy(-1),

			min = viewPos._subtract(size.multiplyBy(p))._round(),
			max = min.add(size.multiplyBy(1 + p * 2))._round();

		this._bounds = new L.Bounds(min, max);
	},

	initRoot: function () {
		if (this._root) { return; }

		var root = this._root = L.Clip.createElement('svg');

		this._pane.appendChild(root);

		if (this._map.options.zoomAnimation && L.Browser.any3d) {
			this._map.on({
				'zoomanim': this._animateZoom,
				'zoomend': this._endAnimate
			}, this);
			root.setAttribute('class', ' leaflet-zoom-animated');

		} else {
			root.setAttribute('class', ' leaflet-zoom-hide');
		}

		this._map.on('moveend', this.update, this);
		this.update();
	},

	update: function () {
		if (this._zooming) { return; }

		this.updateBounds();

		var vp = this._pathViewport,
			min = vp.min,
			max = vp.max,
			width = max.x - min.x,
			height = max.y - min.y,
			root = this._root;

		if (L.Browser.mobileWebkit) {
			// hack to make flicker on drag end on mobile webkit less irritating
			this._pane.removeChild(root);
		}

		L.DomUtil.setPosition(root, min);

		root.setAttribute('width', width);
		root.setAttribute('height', height);
		root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));

		if (L.Browser.mobileWebkit) {
			this._pane.appendChild(root);
		}
	},

	_animateZoom: function (options) {
		var	scale = this._map.getZoomScale(options.zoom),
			offset = this._map._getCenterOffset(options.center),
			translate = offset.multiplyBy(-scale)._add(this._bounds.min);

		this._root.style[L.DomUtil.TRANSFORM] =
				L.DomUtil.getTranslateString(translate) + ' scale(' + scale + ') ';

		this._zooming = true;
	},

	_endAnimate: function () {
		this._zooming = false;
	}
});
