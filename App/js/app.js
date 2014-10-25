var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route("index");
  this.route("about");
  this.route("team");
  this.route("expeditions");
  this.route("projects");
  this.route("get_involved");
  this.route("press");
  this.route("submit");
  this.route("volunteer");
  this.route("contact");
});

App.BannerComponent = Ember.Component.extend({
  image: "img/videoFallback2.png",
  statement: "Every language in the world"
});

// App.IndexRoute = Ember.Route.extend({
//   model: function() {
//     return {
//       image: "../img/videoFallback2.png",
//       statement: "Every language in the world"
//     };
//   }
// });

// App.TeamRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.findAll("volunt")
//   }
// });

// App.Contact = DS.Model.extend({
//   name: ("string"),
//   location: ("string"),
//   photo: ("string")
// });

// App.Contact.FIXTURES = [
//   {
//     id:100,
//     name: "Daniel Bogre Udell",
//     location: "New York, USA",
//     photo: "../img/faces/daniel.jpg"
//   },{
//     id:101,
//     name: "Freddie Andrade",
//     location: "New York, USA",
//     photo: "../img/faces/freddie.jpg"
//   },{
//     id:102,
//     name: "Lindie Botes",
//     location: "Prætoria, South Africa",
//     photo: "../img/faces/lindie.jpg"
//   },{
//     id:103,
//     name: "Cathy Zhang",
//     location: "New York, USA",
//     photo: "../img/faces/cathy.jpg"
//   },{
//     id:104,
//     name: "Pau Mateo",
//     location: "Kaunas, Lithuania",
//     photo: "../img/faces/pau.jpg"
//   },{
//     id:105,
//     name: "Manjusha Raveendran",
//     location: "Buffalo, USA",
//     photo: "../img/faces/manjusha.jpg"
//   },{
//     id:106,
//     name: "Madeleine Koerner",
//     location: "Moscow, Russia",
//     photo: "../img/faces/madeleine.jpg"
//   },{
//     id:107,
//     name: "Sarah Doyle",
//     location: "Port Vila, Vanuatu",
//     photo: "../img/faces/sarah.jpg"
//   },{
//     id:108,
//     name: "Plator Gashi",
//     location: "Prishtina, Kosovo",
//     photo: "../img/faces/plator.jpg"
//   },{
//     id:109,
//     name: "Teddy Nee",
//     location: "Guishan, Taiwan",
//     photo: "../img/faces/teddy.jpg"
//   },{
//     id:110,
//     name: "Maxi Salomone",
//     location: "Bahia Blanca, Argentina",
//     photo: "../img/faces/maxi.jpg"
//   },{
//     id:111,
//     name: "Hugo Campbell Sills",
//     location: "Bordeaux, France",
//     photo: "../img/faces/hugo.jpg"
//   },{
//     id:112,
//     name: "Yasmeen Ahmed",
//     location: "Doha, Qatar",
//     photo: "../img/faces/yasmeen.jpg"
//   },{
//     id:113,
//     name: "Luis Miguel Bercia",
//     location: "Brussles, Belgium",
//     photo: "../img/faces/luis.jpg"
//   },{
//     id:114,
//     name: "Andersson Causayá",
//     location: "Santiago, Chile",
//     photo: "../img/faces/andersson.jpg"
//   },{
//     id:115,
//     name: "Liam Neeve",
//     location: "Edinburgh, Scotland",
//     photo: "../img/faces/liam.jpg"
//   }
// ]