var Appointments = Backbone.Collection.extend({
  comparator: function(value1, value2) {
    return value1.get('date') < value2.get('date');
  }
});