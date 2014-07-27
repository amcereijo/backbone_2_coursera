var Appointment = Backbone.Model.extend({
  toJSON: function(){
    var attrs = _.clone(this.attributes);
    attrs.cankelled = attrs.cancelled;
	delete attrs.cancelled;
    return { appointment: attrs };
  }
});