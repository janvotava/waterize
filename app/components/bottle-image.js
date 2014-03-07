var BottleImageComponent = Ember.Component.extend({
  goal: 2000, // in ml

  percent: function() {
    return Math.floor(this.get("drunk") / this.get("goal") * 100); // Calculate percentage of a goal (can be 100%+)
  }.property("drunk"),

  y: function() {
    return 430 - this.get("height"); // Offset of the rectangle
  }.property("height"),

  height: function() {
    return 3.75 * this.get("percent"); // Height of the rectangle
  }.property("percent")
});

export default BottleImageComponent;
