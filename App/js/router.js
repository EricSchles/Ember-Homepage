App.Router.map(function() {
  // this.route("index", {path: "/"});
  this.route("about");
  this.route("team");
  this.route("expeditions");
  this.route("projects");
  this.route("get_involved");
  this.route("press");

  this.route("translate", { path: "https://docs.google.com/forms/d/1hVjiergDRQouyebGRn7gpGguKfKITTqJ9ar82DweRmo/viewform"});
  this.route("youtube", { path: "https://youtube.com/user/WikiTongues"});
  this.route("facebook", { path: "https://www.facebook.com/wikitongues"});
  this.route("twitter", { path: "https://twitter.com/wikitongues"});
  this.route("tumblr", { path: "http://wikitongues.tumblr.com/"});
  this.route("instagram", { path: "http://instagram.com/wikitongues"});
});