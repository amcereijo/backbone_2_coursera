var AppointmentApp = new (Backbone.View.extend({
  Collections: {},
  Models: {},
  Views: {},
  events: {
    'click a[data-backbone]': function(e){
      e.preventDefault();
      Backbone.history.navigate(e.target.pathname, { trigger: true });
    }
  },
  start: function(data){
    this.appointments = new AppointmentApp.Collections.Appointments(data.appointments);
    var appointmentsView = new AppointmentApp.Views.Appointments({collection: this.appointments});
    $('#app').html(appointmentsView.render().el);
  }
}))({el: document.body});