var AppRouter = new (Backbone.Router.extend({
  routes: { 
    "": "index",
    "appointments/p:page/pp:per_page": "page"
  },
  initialize: function(options){
    this.appointmentList = new AppointmentList();
  },
  index: function(){
    var appointmentsView = new AppointmentListView({collection: this.appointmentList});
    appointmentsView.render();
    $('#app').html(appointmentsView.el);
    this.appointmentList.fetch();
  },
  page: function(page, per_page) {
    this.appointmentList.fetch({data:{page: page, per_page:per_page}});
  }
}));