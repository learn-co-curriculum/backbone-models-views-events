UserDataView = Backbone.View.extend({
  initialize : function() {
    // you'll want to call the listenTo function on your instance of the class here
    // listenTo takes three arguments:
    //   1. the property name that points to the model you want to listen to
    //   2. the thing you want to listen for (in this case, you're listening for changes, so "change")
    //   3. the function the view should call when the model changes - say "handleChange"
  },
  render : function() {
    //the html you'll want to use looks something like this:
    // <h1>User Data Updated!</h1><h2>Users Name is Katie</h2>');

    //remember to return the instance of the class here
  },
  handleChange : function() {
    // call on the render() function here

    // call on the appendtoDOM() function here
  },
  appendtoDOM : function() {
    // append the el from the instance of this class to the body here
  }
})