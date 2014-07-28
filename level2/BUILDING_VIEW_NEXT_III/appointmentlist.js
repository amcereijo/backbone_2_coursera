var AppointmentList = Backbone.Collection.extend({
  parse: function(response){
    this.per_page = response.per_page;
    this.page = response.page;
    this.total = response.total;
    
    return response.appointments;
  }
});