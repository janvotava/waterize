var Day = Ember.Object.extend({
  // Returns instance of moment for the given timestamp
  moment: function() {
    return window.moment(this.get("timestamp"));
  }.property("timestamp"),

  // Return formatted date
  formatted: function() {
    return this.get("moment").format("YYYY-MM-DD");
  }.property("moment"),

  // We'll use this as a key for the storage
  storageKey: function() {
    return "%@|%@".fmt(Day.namespace, this.get("formatted"));
  }.property("formatted"),

  // ml drunk
  drunk: function() {
    var drunk = window.localStorage[this.get("storageKey")];
    drunk = parseInt(drunk || 0, 10);

    return drunk;
  }.property("storageKey"),

  // Return next day
  tomorrow: function() {
    var tommorow = this.get("moment").clone().add(1, "day");

    if(window.moment().isAfter(tommorow)) {
      return Day.create({ timestamp: tommorow.valueOf() });
    }
  }.property("moment"),

  // Return previous day
  yesterday: function() {
    return Day.create({ timestamp: this.get("moment").clone().subtract(1, "day").valueOf() });
  }.property("moment"),

  // Write value into localStorage
  save: function() {
    window.localStorage[this.get("storageKey")] = this.get("drunk");
  }
});

Day.reopenClass({
  namespace: "waterize", // Namespace in the localStorage

  // Query by timestamp
  query: function(conditions) {
    var timestamp = window.moment(conditions.formatted).startOf("day").valueOf();

    return Day.create({ timestamp: timestamp });
  },

  today: function() {
    return Day.query({ formatted: window.moment() });
  }
});

export default Day;
