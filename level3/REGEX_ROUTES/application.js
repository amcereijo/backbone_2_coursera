var AppRouter = new (Backbone.Router.extend({
  initialize: function(){
    this.route(/^appointments\/(d+)$/, 'show');
  },
  show: function(id){
    var appointment = new Appointment({id: id});
    console.log(appointment);
  }
}));