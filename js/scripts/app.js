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

// Router
App.Router.map(function() {
  this.route("about");
  this.route("team");
  this.route("mission");
  this.route("expeditions");
  this.route("projects");
  this.route("get_involved");
  this.route("press");
  this.route("submit");
  this.route("volunteer");
  this.route("contact");
  this.route("legal");
  this.route("submitGuidelines");
  this.route("volunteerGuidelines");
  this.route("releaseForm");
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: 0,
        image: "img/banner.jpg",
      }
    ];
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: 0,
        image: "img/earth-01.jpg",
        text: "Our World"
      }
    ];
  }
});

App.MissionRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        id: 0,
        image: "img/mission.jpg",
      }
    ];
  }
});

App.TeamRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return this.store.findAll("volunteer")
  }
});

App.GoogleMapsComponent = Ember.Component.extend({
  insertMap: function() {
    var container = this.$(".map-canvas");

    var options = {
      center: new google.maps.LatLng(this.get("latitude"),this.get("longitude")),
      zoom:2,
      disableDefaultUI:1,
      mapTypeControl: false,
      minZoom:2,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    new google.maps.Map(container[0], options);

  }.on("didInsertElement")
});

App.Volunteer = DS.Model.extend({
  name: DS.attr("string"),
  location: DS.attr("string"),
  coordinates: DS.attr("number"),
  photo: DS.attr("string")
});

App.SubmitRoute = Ember.Route.extend(App.ResetScroll)
App.VolunteerRoute = Ember.Route.extend(App.ResetScroll)
App.ContactRoute = Ember.Route.extend(App.ResetScroll)

App.ApplicationAdapter = DS.FixtureAdapter.extend({

});

App.Volunteer.FIXTURES = [
  {
    id:1,
    name: "Daniel Bogre Udell",
    location: "New York, USA",
    coordinates: (-73.95328556215065,40.649647902099495),
    photo: "img/faces/daniel.jpg"
  },
  {
    id:2,
    name: "Freddie Andrade",
    location: "New York, USA",
    coordinates: (-73.95328556215065,40.649647902099495),
    photo: "img/faces/freddie.jpg"
  },
  {
    id:3,
    name: "Lindie Botes",
    location: "Prætoria, South Africa",
    coordinates: (28.188055599999988,-25.7461111),
    photo: "img/faces/lindie.jpg"
  },
  {
    id:4,
    name: "Cathy Zhang",
    location: "New York, USA",
    coordinates: (28.188055599999988,-25.7461111),
    photo: "img/faces/cathy.jpg"
  },
  {
    id:5,
    name: "Pau Mateo",
    location: "Kaunas, Lithuania",
    coordinates: (23.90359650000005,54.8985207),
    photo: "img/faces/pau.jpg"
  },
  {
    id:6,
    name: "Manjusha Raveendran",
    location: "Buffalo, USA",
    coordinates: (-73.9780035,40.7056308),
    photo: "img/faces/manjusha.jpg"
  },
  {
    id:7,
    name: "Madeleine Koerner",
    location: "Moscow, Russia",
    coordinates: (37.6173,55.755826),
    photo: "img/faces/madeleine.jpg"
  },
  {
    id:8,
    name: "Sarah Doyle",
    location: "Port Vila, Vanuatu",
    coordinates: (168.32732450000003,-17.7332512),
    photo: "img/faces/sarah.jpg"
  },
  {
    id:9,
    name: "Plator Gashi",
    location: "Prishtina, Kosovo",
    coordinates:(21.1431885,42.6582018),
    photo: "img/faces/plator.jpg"
  },
  {
    id:10,
    name: "Teddy Nee",
    location: "Guishan, Taiwan",
    coordinates:(120.22687580000002,22.9998999),
    photo: "img/faces/teddy.jpg"
  },
  {
    id:11,
    name: "Maxi Salomone",
    location: "Bahia Blanca, Argentina",
    coordinates: (-62.26807780000002,-38.71167760000001),
    photo: "img/faces/maxi.jpg"
  },
  {
    id:12,
    name: "Hugo Campbell Sills",
    location: "Bordeaux, France",
    coordinates: (-0.5791799999999512,44.837789),
    photo: "img/faces/hugo.jpg"
  },
  {
    id:13,
    name: "Yasmeen Abdullahi",
    location: "Doha, Qatar",
    coordinates: (36.82194619999996,-1.2920659),
    photo: "img/faces/yasmeen.jpg"
  },
  {
    id:14,
    name: "Luis Miguel Bercia",
    location: "Brussles, Belgium",
    coordinates: (4.351710300000036,50.8503396),
    photo: "img/faces/luis.jpg"
  },
  {
    id:15,
    name: "Andersson Causayá",
    location: "Popoyan, Colombia",
    coordinates: (-76.60916700000001,2.454167),
    photo: "img/faces/andersson.jpg"
  },
  {
    id:16,
    name: "Liam Neeve",
    location: "Edinburgh, Scotland",
    coordinates: (-3.188266999999996,55.953252),
    photo: "img/faces/liam.jpg"
  },
  {
    id:17,
    name: "Tatenda Chingono",
    location: "Harare, Zimbabue",
    coordinates: (31.029722200000037,-17.8638889),
    photo: "img/faces/tatenda.jpg"
  },
];


// Nodemailer
// var nodemailer = require('nodemailer');

var nodemailer = require(['nodemailer'], function (nodemailer) {

});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'faandrade',
      pass: 'keikothewhale'
    }
  });