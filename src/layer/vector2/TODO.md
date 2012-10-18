
DONE - Viewport (SVG)
	calculating viewPort
	setting up/updating root
	creating elements
	zoom animation

DONE - Viewport.VML mixin
DONE - Viewport.Canvas extends Viewport

Map.Viewport mixin
	managing viewports


Path
	default style options
	update clip on moveend

Polyline extends Path
	project latlngs
	clip and simplify polyline points

Polygon extends Polyline
	clip and simplify polygon points

Circle extends Path
	project circle latlng / radius

CircleMarker extends Path


Clip (SVG)
	set/update svg styles
	set up svg events
	create/update svg path

Clip.VML mixin
	set/update vml styles
	set up vml events
	create/update vml path

Clip.Polyline extends Clip
	generate polyline path string from points

Clip.Polygon extends Clip
	generate polyline path string from points

Clip.Circle extends Clip
	generate circle path string from circle/radius


Clip.Canvas
	set/update fill/stroke style
	draw path from points
	set up click event (depends on path containsPoint)

Clip.Canvas.Polyline extends Clip.Canvas
	containsPoint

Clip.Canvas.Polygon extends Clip.Canvas
	containsPoint

Clip.Canvas.Circle extends Clip.Canvas
	containsPoint
	draw arc from point/radius


vector
	polyline
		Polyline.js
		Clip.Polyline.js
		Clip.Canvas.Polyline.js
	polygon
		Polygon.js
		Rectangle.js
		Clip.Polygon.js
		Clip.Canvas.Polygon.js
	circle
		Circle.js
		CircleMarker.js
		Clip.Circle.js
		Clip.Canvas.Circle.js
	Path.js
	Clip.js
	Clip.VML.js
	Clip.Canvas.js
	Viewport.js
	Viewport.VML.js
	Viewport.Canvas.js
	Map.Viewport.js
