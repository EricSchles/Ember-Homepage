var App = Ember.Application.create({
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
  this.resource("team");
  this.resource("mission");
  this.resource("expeditions");
  this.resource("projects");
  this.route("get_involved");
  this.resource("press");
  this.route("submit");
  this.route("volunteer");
  this.route("contact");
  this.resource("legal");
  this.resource("releaseForm");
  this.resource("poly", function(){
    this.route("book");
  });
});

App.IndexController = Ember.Controller.extend({
  image: "img/banner.jpg",
  youTubeLink: "img/youTubeLink.png"
})

App.TeamRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return this.store.findAll("volunteer")
  }
});

App.PolyRoute = Ember.Route.extend({
  model: function() {
    return [
      {
        image: "img/polyProfile.jpg",
      }
    ],
    this.store.findAll("Poly");
  }
});

App.GoogleMapsComponent = Ember.Component.extend({
  latitude: "",
  longitude: "",

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
  latitude: DS.attr("number"),
  longitude: DS.attr("number"),
  photo: DS.attr("string")
});

App.Poly = DS.Model.extend({
  version: DS.attr("string"),
  url: DS.attr("string"),
  dateCreated: DS.attr("string"),
  lastEdited: DS.attr("string"),
  createdBy: DS.attr("string"),
  location: DS.attr("string"),
  release: DS.attr("string"),
  source: DS.attr("string"),
  sourceName: DS.attr("string"),
  sourcePhrases: DS.attr("array"),
  target: DS.attr("string"),
  targetName: DS.attr("string"),
  targetPhrases: DS.attr("array"),
  title: DS.attr("string"),
  banner: DS.attr("number"),
  bannerUrl: DS.attr("string"),
  sounds: DS.attr("number"),
  videos: DS.attr("number"),
  editing: DS.attr("number"),
  comments: DS.attr("number"),
  phrases: DS.attr("number"),
  views: DS.attr("number"),
  saves: DS.attr("number"),
  shares: DS.attr("number"),
  embeds: DS.attr("number")
});

App.SubmitRoute = Ember.Route.extend(App.ResetScroll, {
  model: function() {
    return {
      title: "Thank you for submitting a video!",
      text: "We'll be sure to notify you when it goes live."
    };
  },
  actions: {
    closeModal: function() {
      $("section.success").hide()
      $("body").removeClass("modalFreeze")
    }
  }
})

App.VolunteerRoute = Ember.Route.extend(App.ResetScroll, {
  actions: {
    closeModal: function() {
      $("section.success").hide()
      $("body").removeClass("modalFreeze")
    }
  }
})

App.ContactRoute = Ember.Route.extend(App.ResetScroll, {
  actions: {
    closeModal: function() {
      $("section.success").hide()
      $("body").removeClass("modalFreeze")
    }
  }
})

App.SubmitController = Ember.Controller.extend({
  actions: {
    openGuidelines: function () {
      $(".guidelines").toggle()
    },
    openTOS: function () {
      $(".termsOfService").toggle()
    }
  }
})

App.SubmitGuidelinesComponent = Ember.Component.extend({
  actions: {
    hideGuidelines: function () {
      $(".guidelines").hide()
    }
  }
})

App.ReleaseFormsComponent = Ember.Component.extend({
  actions: {
    hideTOS: function () {
      $(".termsOfService").hide()
    }
  }
})

App.VolunteerController = Ember.Controller.extend({
  actions: {
    openGuidelines: function () {
      $(".guidelines").toggle()
    }
  }
})

App.VolunteerGuidelinesComponent = Ember.Component.extend({
  actions: {
    hideGuidelines: function () {
      $(".guidelines").hide()
    }
  }
})

App.FormModalComponent = Ember.Component.extend({
  actions: {
    closeModal: function() {
      $("section.success").hide()
    }
  }
})

App.SubmitView = Ember.View.extend({
  templateName: "submit",
  name: "",
  email: "",
  link: "",
  speaker: "",
  language: "",
  videoLocation: "",
  transcription: "",
  translation: "",
  message: "",

  actions: {
    submit: function(event) {
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'ZMiPM6bTRAzqjOaIqzn-tA',
          'message': {
            'from_email': this.get("email"),
            'to': [
                {
                  'email': 'hello@wikitongues.org',
                  'name': 'Wikitongues',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'New Video:'+this.get("language"),
            'html': "Name of submitter: "+this.get("name")+
              "<br/>Email: "+this.get("email")+
              "<br/>Link to the video: "+this.get("link")+
              "<br/>Name of speaker: "+this.get("speaker")+
              "<br/>Languages spoken: "+this.get("language")+
              "<br/>Location of video: "+this.get("videoLocation")+
              "<br/>Transcription: "+this.get("transcription")+
              "<br/>Translation: "+this.get("translation")+
              "<br/>Message: "+this.get("message")+
              "<br/>Release Form: "+this.get("releaseForm")
          }
        }
       }).done(function(response) {
        var status = response[0].status;
        if(status == 'sent')
          $("section.success").show();
          $("body").addClass("modalFreeze");
       });
    }
  }
})

App.VolunteerView = Ember.View.extend({
  templateName: "volunteer",
  name: "",
  email: "",
  location: "",
  other: "",
  message: "",

  actions: {
    submit: function(event) {
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'ZMiPM6bTRAzqjOaIqzn-tA',
          'message': {
            'from_email': this.get("email"),
            'to': [
                {
                  'email': 'hello@wikitongues.org',
                  'name': 'Wikitongues',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'New Volunteer:'+this.get("location"),
            'html': "Name of submitter: "+this.get("name")+
              "<br/>Email: "+this.get("email")+
              "<br/>Location of volunteer: "+this.get("location")+
              "<br/>Ambassador: "+this.get("ambassador")+
              "<br/>Social Media: "+this.get("socialMedia")+
              "<br/>Developer: "+this.get("webDev")+
              "<br/>Other: "+this.get("other")+
              "<br/>Message: "+this.get("message")
          }
        }
       }).done(function(response) {
        var status = response[0].status;
        if(status == 'sent')
          $("section.success").show();
          $("body").addClass("modalFreeze");
       });
    }
  }
})

App.ContactView = Ember.View.extend({
  templateName: "contact",
  name: "",
  email: "",
  message: "",

  actions: {
    submit: function(event) {
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'ZMiPM6bTRAzqjOaIqzn-tA',
          'message': {
            'from_email': this.get("email"),
            'to': [
                {
                  'email': 'hello@wikitongues.org',
                  'name': 'Wikitongues',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'New Message: '+this.get("message"),
            'html': "Name of submitter: "+this.get("name")+
              "<br/>Email: "+this.get("email")+
              "<br/>Message: "+this.get("message")
          }
        }
       }).done(function(response) {
        var status = response[0].status;
        if(status == 'sent')
          $("section.success").show();
          $("body").addClass("modalFreeze");
       });
    }
  }
})

App.ApplicationAdapter = DS.FixtureAdapter.extend({

});

App.Volunteer.FIXTURES = [
  {
    id:1,
    name: "Daniel Bogre Udell",
    location: "New York, USA",
    latitude:(-73.95328556215065),
    longitude: (40.649647902099495),
    photo: "img/faces/daniel.jpg"
  },
  {
    id:2,
    name: "Freddie Andrade",
    location: "New York, USA",
    latitude:(-73.95328556215065),
    longitude: (40.649647902099495),
    photo: "img/faces/freddie.jpg"
  },
  {
    id:3,
    name: "Lindie Botes",
    location: "Pretoria, South Africa",
    latitude:(28.188055599999988),
    longitude: (-25.7461111),
    photo: "img/faces/lindie.jpg"
  },
  {
    id:4,
    name: "Cathy Zhang",
    location: "New York, USA",
    latitude:(28.188055599999988),
    longitude: (-25.7461111),
    photo: "img/faces/cathy.jpg"
  },
  {
    id:5,
    name: "Pau Mateo",
    location: "Kaunas, Lithuania",
    latitude:(23.90359650000005),
    longitude: (54.8985207),
    photo: "img/faces/pau.jpg"
  },
  {
    id:6,
    name: "Manjusha Raveendran",
    location: "Buffalo, USA",
    latitude:(-73.9780035),
    longitude: (40.7056308),
    photo: "img/faces/manjusha.jpg"
  },
  {
    id:7,
    name: "Madeleine Koerner",
    location: "Moscow, Russia",
    latitude:(37.6173),
    longitude: (55.755826),
    photo: "img/faces/madeleine.jpg"
  },
  {
    id:8,
    name: "Sarah Doyle",
    location: "Port Vila, Vanuatu",
    latitude:(168.32732450000003),
    longitude: (-17.7332512),
    photo: "img/faces/sarah.jpg"
  },
  {
    id:9,
    name: "Plator Gashi",
    location: "Prishtina, Kosovo",
    latitude:(1.1431885),
    longitude:(242.6582018),
    photo: "img/faces/plator.jpg"
  },
  {
    id:10,
    name: "Teddy Nee",
    location: "Guishan, Taiwan",
    latitude:(20.22687580000002),
    longitude:(122.9998999),
    photo: "img/faces/teddy.jpg"
  },
  {
    id:11,
    name: "Maxi Salomone",
    location: "Bahia Blanca, Argentina",
    latitude:(-62.26807780000002),
    longitude: (-38.71167760000001),
    photo: "img/faces/maxi.jpg"
  },
  {
    id:12,
    name: "Hugo Campbell Sills",
    location: "Bordeaux, France",
    latitude:(-0.5791799999999512),
    longitude: (44.837789),
    photo: "img/faces/hugo.jpg"
  },
  {
    id:13,
    name: "Fatuma A Abdullahi",
    location: "Doha, Qatar",
    latitude:(36.82194619999996),
    longitude: (-1.2920659),
    photo: "img/faces/yasmeen.jpg"
  },
  {
    id:14,
    name: "Luis Miguel Rojas-Berscia",
    location: "Nijmegen, Netherlands",
    latitude:(4.351710300000036),
    longitude: (50.8503396),
    photo: "img/faces/luis.jpg"
  },
  {
    id:15,
    name: "Andersson Causayá",
    location: "Popoyan, Colombia",
    latitude:(-76.60916700000001),
    longitude: (2.454167),
    photo: "img/faces/andersson.jpg"
  },
  {
    id:16,
    name: "Liam Neeve",
    location: "Edinburgh, Scotland",
    latitude:(-3.188266999999996),
    longitude: (55.953252),
    photo: "img/faces/liam.jpg"
  },
  {
    id:17,
    name: "Tatenda Chingono",
    location: "Harare, Zimbabue",
    latitude:(31.029722200000037),
    longitude: (-17.8638889),
    photo: "img/faces/tatenda.jpg"
  },
  {
    id:18,
    name: "Chris Voxland",
    location: "New York, USA",
    latitude:(-73.95328556215065),
    longitude: (40.649647902099495),
    photo: "img/faces/chrisVoxland.jpg"
  },
];

App.Poly.FIXTURES = [
  {
    id:1000,
    version: "0.0.1",
    url: "go.wikitongues.org/grn-eng/guarani-for-the-home",
    dateCreated: "1/15/15",
    lastEdited: "Today",
    createdBy: "FredericoAndrade",
    location: "New York, NY, USA",
    release: "Public",
    source: "GRN",
    sourceName: "Guaraní",
    sourcePhrases:["Mba’éichapa.","Jajohecha peve.","Mba’éichapa nderéra?","Cheréra …","Reñe’ẽkuaápa inglyesñe’ẽme?","Reñe’ẽkuaápa karaiñe’ẽme?","Héẽ.","Nahániri.","Aguyje.","Aguyjevete ndéve."],
    target: "ENG",
    targetName: "English",
    targetPhrases:["Hello","Goodbye.","What is your name?","My name is …","Do you speak English?","Do you speak Spanish?","Yes.","No.","Thank you.","Thank you very much."],
    title: "Guaraní for the home",
    banner: 1,
    bannerUrl: "img/polyProfile.jpg",
    sounds: 0,
    videos: 0,
    editing: 0,
    comments: 0,
    phrases: 9,
    views: 0,
    saves: 0,
    shares: 0,
    embeds: 0
  }
];