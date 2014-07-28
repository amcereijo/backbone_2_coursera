var AppRouter = new (Backbone.Router.extend({
  routes: {
    "appointments/:id":  "show",
    "*path": "all"
  },
  show: function(id){
    var appointment = new Appointment({id: id});
    console.log(appointment);
  },
  all: function(path){
    console.log(path);
  }
}));