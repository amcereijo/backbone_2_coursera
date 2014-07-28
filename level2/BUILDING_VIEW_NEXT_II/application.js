var AppointmentListView = Backbone.View.extend({
  template: _.template('<a href="#/appointments/p<%= page %>/pp<%= per_page %>">View Next</a>'),
  initialize: function(){
    this.collection.on('reset', this.render, this);
  },
  render: function(){
    this.$el.empty();
    this.collection.forEach(this.addOne, this);
  },
  addOne: function(model){
    var appointmentView = new AppointmentView({model: model});
    appointmentView.render();
    this.$el.append(appointmentView.el);
    this.$el.append(this.template({page: this.collection.page+1, per_page: this.collection.per_page}));
  }
});