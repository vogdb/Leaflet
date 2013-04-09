This is fork of Leaflet library which adds new method for L.control.layers **control.getActiveLayers()** and L.Map **map.getActiveLayers()**.
Example of usage:

    var cloudmadeUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        cloudmadeAttribution = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

    var minimal   = L.tileLayer(cloudmadeUrl, {styleId: 22677, attribution: cloudmadeAttribution}),
        midnight  = L.tileLayer(cloudmadeUrl, {styleId: 999,   attribution: cloudmadeAttribution}),
        motorways = L.tileLayer(cloudmadeUrl, {styleId: 46561, attribution: cloudmadeAttribution});

    var map = L.map('map', {
        center: new L.LatLng(39.73, -104.99),
        zoom: 10,
        layers: [minimal, motorways]
    });

    var baseMaps = {
        "Minimal": minimal,
        "Night View": midnight
    };

    var overlayMaps = {
        "Motorways": motorways
    };

    var control = L.control.layers(baseMaps, overlayMaps)
    control.addTo(map);
    //activeLayers will be an one-dimensional array which would be empty if map doesn't have any layer enabled.
    var activeLayers = control.getActiveLayers()
    for(var layerIndex = 0; layerIndex < activeLayers.length; layerIndex++){
        console.log('active layerName: ' + activeLayers[layerIndex]);
    }

**Important!** I didn't find L.Map getActiveLayers to be very useful because map doesn't hold information about layer's names. All map's information about layers is quite private so be careful with it.
<img src="http://leafletjs.com/docs/images/logo.png" alt="Leaflet" />

Leaflet is a modern open-source JavaScript library for **mobile-friendly interactive maps**.
It is developed by [Vladimir Agafonkin][] with a team of dedicated [contributors][].
Weighing just about 27 KB of gzipped JS code, it has all the [features][] most developers ever need for online maps.

Leaflet is designed with *simplicity*, *performance* and *usability* in mind.
It works efficiently across all major desktop and mobile platforms out of the box,
taking advantage of HTML5 and CSS3 on modern browsers while being accessible on older ones too.
It can also be extended with many [plugins][],
has a beautiful, easy to use and [well-documented][] API
and a simple, readable [source code][] that is a joy to [contribute][] to.

For more information, check out the [official website][].

We're happy to meet new contributors.
If you want to **get involved** with Leaflet development, check out the [contribution guide][contribute].
Let's make the best open-source library for maps that can possibly exist!

 [Vladimir Agafonkin]: http://agafonkin.com/en
 [contributors]: https://github.com/Leaflet/Leaflet/graphs/contributors
 [features]: http://leafletjs.com/features.html
 [plugins]: http://leafletjs.com/plugins.html
 [well-documented]: http://leafletjs.com/reference.html "Leaflet API reference"
 [source code]: https://github.com/Leaflet/Leaflet "Leaflet GitHub repository"
 [hosted on GitHub]: http://github.com/Leaflet/Leaflet
 [contribute]: https://github.com/Leaflet/Leaflet/blob/master/CONTRIBUTING.md "A guide to contributing to Leaflet"
 [official website]: http://leafletjs.com
