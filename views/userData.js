UserDataView = Backbone.View.extend({
  initialize : function() {
    this.listenTo(this.model, "change", this.handleChange);
  },
  render : function() {
    this.$el.append('<h1>User Data Updated!</h1><h2>Users Name is ' + this.model.get("name") + '</h2>');
    return this;
  },
  handleChange : function() {
    this.render().appendtoDOM();
  },
  appendtoDOM : function() {
    $("body").append(this.el);
  }
})