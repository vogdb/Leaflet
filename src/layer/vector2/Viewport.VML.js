
L.Browser.vml = !L.Browser.svg && (function () {
	try {
		var div = document.createElement('div');
		div.innerHTML = '<v:shape adj="1"/>';

		var shape = div.firstChild;
		shape.style.behavior = 'url(#default#VML)';

		return shape && (typeof shape.adj === 'object');
	} catch (e) {
		return false;
	}
}());

L.Viewport.include(L.Browser.svg || !L.Browser.vml ? {} : {

	initialize: function (map) {
		this._map = map;

		var root = this._root = document.createElement('div');
		root.className = 'leaflet-vml-container';

		map._panes.overlayPane.appendChild(root);

		map.on('moveend', this.updateBounds);
		this.updateBounds();
	},

	createElement: (function () {
		try {
			document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
			return function (name) {
				return document.createElement('<lvml:' + name + ' class="lvml">');
			};
		} catch (e) {
			return function (name) {
				return document.createElement('<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
			};
		}
	}())
});
