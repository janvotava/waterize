import Day from "appkit/models/day"; // ES6 import, you need to import model, so it's accessible inside your route

var DayRoute = Ember.Route.extend({
  model: function(params) {
    return Day.query({formatted: params.formatted});
  }
});

export default DayRoute;
