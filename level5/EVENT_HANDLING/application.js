var AppointmentForm = Backbone.View.extend({
  template: _.template('<form><input name="title" type="text" value="<%= title %>" /><input name="name" type="text" value="<%= name %>" /></form>'),
  events:{
    submit: 'save'
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
    save: function(e){
      e.preventDefault();
      var titleV = this.$('input[name=title]').val();
      var nameV = this.$('input[name=name]').val();
      this.model.save({title: titleV, name: nameV});
    }
});