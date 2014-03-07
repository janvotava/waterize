import Day from "appkit/models/day";

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo("day", Day.today());
  }
});
