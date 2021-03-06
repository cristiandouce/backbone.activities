// activities.Place
// ----------------

function Place(params) {
    this.params = params || {};

    this.initialize.apply(this, arguments);
}

_.extend(Place.prototype, {
    pattern: null,

    initialize: function() {},

    // Builds a route from our `string` pattern and params `object`.
    getRoute: function() {
        var p, path = this.pattern;

        for (p in this.params) {
            path = path.replace(":" + p, this.params[p]);
        }

        return path;
    },

    getParams: function() {
        return this.params;
    },

    equals: function(place) {
        if (place instanceof this.constructor && this._equalParams(place)) {
            return true;
        }

        return false;
    },

    _equalParams: function(place) {
        var params = place.getParams();

        return _.isEqual(params, this.params);
    }
});

Place.extend = activities.helpers.extend;
activities.Place = Place;

