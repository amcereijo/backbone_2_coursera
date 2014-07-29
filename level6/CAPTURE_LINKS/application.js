var AppointmentApp = new (Backbone.View.extend({
  events: {
    'click a[data-backbone]': function(e){
      e.preventDefault();
      Backbone.history.navigate(e.target.pathname, {trigger: true});
    }, 
  },
  Collections: {},
  Models: {},
  Views: {}
}))({el: document.body});