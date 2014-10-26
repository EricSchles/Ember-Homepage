var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  // this.route("index");
  this.route("about");
  this.route("team");
  this.route("expeditions");
  this.route("projects");
  this.route("get_involved");
  this.route("press");
  this.route("submit");
  this.route("volunteer");
  this.route("contact");
  this.route("privacy");
  this.route("terms");
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: 0,
        image: "img/videoFallback2.png",
        text: "Every Language In The World"
      }
    ];
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: 0,
        image: "img/earth-02.jpg",
        text: "Our World"
      }
    ];
  }
});

App.TeamRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id:1,
        name: "Daniel Bogre Udell",
        location: "New York, USA",
        photo: "img/faces/daniel.jpg"
      },
      {
        id:2,
        name: "Freddie Andrade",
        location: "New York, USA",
        photo: "img/faces/freddie.jpg"
      },
      {
        id:3,
        name: "Lindie Botes",
        location: "Prætoria, South Africa",
        photo: "img/faces/lindie.jpg"
      },
      {
        id:4,
        name: "Cathy Zhang",
        location: "New York, USA",
        photo: "img/faces/cathy.jpg"
      },
      {
        id:5,
        name: "Pau Mateo",
        location: "Kaunas, Lithuania",
        photo: "img/faces/pau.jpg"
      },
      {
        id:6,
        name: "Manjusha Raveendran",
        location: "Buffalo, USA",
        photo: "img/faces/manjusha.jpg"
      },
      {
        id:7,
        name: "Madeleine Koerner",
        location: "Moscow, Russia",
        photo: "img/faces/madeleine.jpg"
      },
      {
        id:8,
        name: "Sarah Doyle",
        location: "Port Vila, Vanuatu",
        photo: "img/faces/sarah.jpg"
      },
      {
        id:9,
        name: "Plator Gashi",
        location: "Prishtina, Kosovo",
        photo: "img/faces/plator.jpg"
      },
      {
        id:10,
        name: "Teddy Nee",
        location: "Guishan, Taiwan",
        photo: "img/faces/teddy.jpg"
      },
      {
        id:11,
        name: "Maxi Salomone",
        location: "Bahia Blanca, Argentina",
        photo: "img/faces/maxi.jpg"
      },
      {
        id:12,
        name: "Hugo Campbell Sills",
        location: "Bordeaux, France",
        photo: "img/faces/hugo.jpg"
      },
      {
        id:13,
        name: "Yasmeen Abdullahi",
        location: "Doha, Qatar",
        photo: "img/faces/yasmeen.jpg"
      },
      {
        id:14,
        name: "Luis Miguel Bercia",
        location: "Brussles, Belgium",
        photo: "img/faces/luis.jpg"
      },
      {
        id:15,
        name: "Andersson Causayá",
        location: "Santiago, Chile",
        photo: "img/faces/andersson.jpg"
      },
      {
        id:16,
        name: "Liam Neeve",
        location: "Edinburgh, Scotland",
        photo: "img/faces/liam.jpg"
      }
    ];
  }
});

App.IndexView = Ember.View.extend({
  image: "../img/videoFallback2.png",
  statement: "Every language in the world"
});

App.Contact = DS.Model.extend({
  name: ("string"),
  location: ("string"),
  photo: ("string")
});
