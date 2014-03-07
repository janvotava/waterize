var DayController = Ember.ObjectController.extend({
  cups: [
    { ml: 250, name: "250 ml / 8.45 oz" },
    { ml: 500, name: "500 ml / 16.9 oz" }
  ],

  selectedCup: 250,

  actions: {
    drinkCup: function() {
      var model = this.get("model");
      var ml = this.get("selectedCup");
      model.incrementProperty("drunk", ml);
      model.save();
    },

    emptyBottle: function() {
      var model = this.get("model");
      model.set("drunk", 0);
      model.save();
    }
  }
});

export default DayController;
