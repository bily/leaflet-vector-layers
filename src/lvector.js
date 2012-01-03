/**
 * @preserve Copyright (c) 2011, Jason Sanford
 * Leaflet Vector Layers is a library for showing geometry objects
 * from multiple geoweb services in a Leaflet map
 */

/*global lvector */

(function (root) {
    root.lvector = {
        VERSION: '1.0.0',

        ROOT_URL: (function () {
            var scripts = document.getElementsByTagName('script'),
                lvectorRe = /^(.*\/)lvector\-?([\w\-]*)\.js.*$/;

            var i, len, src, matches;

            for (i = 0, len = scripts.length; i < len; i++) {
                src = scripts[i].src;
                matches = src.match(lvectorRe);

                if (matches) {
                    if (matches[2] === 'include') { break; }
                    return matches[1];
                }
            }
            return '../../dist/';
        }()),

        noConflict: function () {
            root.lvector = this._originallvector;
            return this;
        },

        _originallvector: root.lvector
    };
}(this));