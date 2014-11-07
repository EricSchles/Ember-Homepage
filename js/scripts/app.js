var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

// Resets scroll
App.ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});

App.SubmitRoute = Ember.Route.extend(App.ResetScroll)
App.VolunteerRoute = Ember.Route.extend(App.ResetScroll)
App.ContactRoute = Ember.Route.extend(App.ResetScroll)