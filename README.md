# Intro to Backbone - Views, Events, and Models

## Overview
* About
* Instructions
* Events module
* Data Binding
* Resources

## About
This lab is similar to the last two labs we have done except in this lab we're going build two views to communicate with one model. We'll have a form that takes data and updates a model. We will have a second view listen for changes on the model and update itself.

##Instructions

1. Run the specs! They will give you a good idea of what you will need to do in this lab.
2. Build out a user model in `models/user.js`
3. Build a form view in `views/main.js`. This view should render our form, set up a listener to handle submission, and call a funciton to modify the model once the form is submitted. 
4. Next we will build the User Data View in `views/userData.js` This view will listen for changes in the model and update the page accordingly.
  * First when this function is initialized we do not want it to render anything, instead we should build out the `#listenTo` function which will listen for changes in the model and then call the appropriate functions.
  * Build out the render function and return return an instance of it like usual. 
  * last build out the `#handleChange` and `#appendtoDom` functions which will add the appropriate information to the DOM after the model has been changed.
5. In `app.js` create a new instance of the User object and create a new instance of each view view we created passing our instance of the user objct to both of them. 
6. Finally append our form view to the body of the HTML page. 

## Data Binding
This lab contains our first instance of Data Binding in Backbone.js. You'll often hear data binding talked about as one of the must-have features of any new Javascript MVC framework. So what exactly *is* data binding?

Data binding simply means an automatic syncing between the model and the view. Data binding usually uses the observer pattern (when one object registers interest in updates with another object who broadcasts changes). One way data binding is when the view listens to the model and refreshes itself any time the model's data changes. Two way data binding (seen in Angular and Ember, two other popular front-end frameworks) is when the view listens to the model __and__ the model listens to the view.  Essentially you have the model and the view constantly syncing with each other.

In Backbone, you can set up two way data binding easily, but most commonly you'll wire up one way data binding, where one or more views listen to changes on a model or a collection and refresh themselves when that model changes.

###listenTo and Events
Since we are setting up a one way data binding in this lab we will need to have a view listen to the model. Views can listen to models by using Backbone's events module and the `#listenTo` function. `#listenTo` takes three arguments a model, an event, and a callback function. 

```javascript
MyView = Backbone.View.extend({
  initialize : function() {
    this.listenTo(this.model, "change", this.render);
  }
  render : function() {
    this.$el.append('<h1>some html</h1>');
    return this;
  }
})
```

Similar to jQuery handling events, we now have Backbones events which we can manually trigger or which will be triggered automatically when certain things happen. The most common event you'll listen for is a change to a model. You also might listen to the add event in a collection. Everytime a model is changed, Backbone will automatically fire that event (similar to Backbone doing that when an element is clicked on in the browser as we saw in the earlier lab) and anything that's listening to that event will call the function listed as the third argument to the `listenTo` call.


## Resources
* [Wikipedia - Data Binding](https://en.wikipedia.org/wiki/Data_binding)
