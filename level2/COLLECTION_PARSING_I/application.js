var Appointments = Backbone.Collection.extend({
  parse: function(response){
    this.per_page = response.per_page;
    this.total = response.total;
    this.page = response.page;
    return response;
  }
});