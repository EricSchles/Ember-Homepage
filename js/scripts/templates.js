Ember.TEMPLATES["node_modules/ember-template-compiler/tests/file-system/app/foo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <section class=\"banner\">\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"Wikitongues\" class=\"fallback\">\n        <h1>");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    </section>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("We are Wikitongues.");
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "about-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page\">\n    <p class=\"drop\"> We stand for the values of diversity and respect between the all the peoples of Earth.</p>\n    <p>We stand for the rights of individuals and their communities to live where they live and to be who they are, thinking, speaking and acting freely.</p>\n    <p>We pledge to forge connections across vast geographies, building bridges of understanding within and between cultures, and ensuring that every person has access to the breadth and the beauty of human experience.</p>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("link"),
    'tagName': ("p")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "team", options) : helperMissing.call(depth0, "link-to", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      <img src=\"img/logos/horizontalLockup.svg\" alt=\"Wikitongues\">\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Home");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Get Involved");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Team");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Projects");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Press");
  }

function program15(depth0,data) {
  
  
  data.buffer.push("Legal");
  }

function program17(depth0,data) {
  
  
  data.buffer.push("Submit a video");
  }

function program19(depth0,data) {
  
  
  data.buffer.push("Volunteer");
  }

function program21(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<nav>\n  <div class=\"logo\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <ul class=\"top-nav\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mission", options) : helperMissing.call(depth0, "link-to", "mission", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    \n    \n    \n    \n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "get_involved", options) : helperMissing.call(depth0, "link-to", "get_involved", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</nav>\n\n<div class=\"container\">\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<footer>\n  <div class=\"content-wrapper\">\n      <a href=\"index.html\" class=\"copyright\">\n          <p>© 2014 <img src=\"img/logos/horizontalLockupWhite.svg\" class=\"icon\" alt=\"\"></p>\n          <p class=\"footerLink\">Every language in the world\n          <br>All Rights Reserved</p>\n      </a>\n      <div class=\"links\">\n          <ul>\n              <li class=\"header\">Organization</li>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mission", options) : helperMissing.call(depth0, "link-to", "mission", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "team", options) : helperMissing.call(depth0, "link-to", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              \n              \n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "projects", options) : helperMissing.call(depth0, "link-to", "projects", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "press", options) : helperMissing.call(depth0, "link-to", "press", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "legal", options) : helperMissing.call(depth0, "link-to", "legal", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </ul>\n          <ul>\n              <li class=\"header\">Get involved</li>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submit", options) : helperMissing.call(depth0, "link-to", "submit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              \n          </ul>\n          <ul>\n              <li class=\"header\">Follow us</li>\n              <li class=\"footerLink\"><a target=\"_blank\" href=\"https://youtube.com/user/WikiTongues\">Youtube</a></li>\n              <li class=\"footerLink\"><a target=\"_blank\" href=\"https://www.facebook.com/wikitongues\">Facebook</a></li>\n              <li class=\"footerLink\"><a target=\"_blank\" href=\"https://twitter.com/wikitongues\">Twitter</a></li>\n              <li class=\"footerLink\"><a target=\"_blank\" href=\"http://wikitongues.tumblr.com/\">Tumblr</a></li>\n              <li class=\"footerLink\"><a target=\"_blank\" href=\"http://instagram.com/wikitongues\">Instragram</a></li>\n          </ul>\n      </div>\n  </div>\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["components/about-subheader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Mission");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Team");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Projects");
  }

  data.buffer.push("<section class=\"subheader\">\n  <ul>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'className': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'className': "STRING",'tagName': "STRING"},hashContexts:{'className': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "mission", options) : helperMissing.call(depth0, "link-to", "mission", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "team", options) : helperMissing.call(depth0, "link-to", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'className': ("footerLink"),
    'tagName': ("li")
  },hashTypes:{'className': "STRING",'tagName': "STRING"},hashContexts:{'className': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "projects", options) : helperMissing.call(depth0, "link-to", "projects", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["components/get-involved-subheader"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Submit  a video");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Volunteer");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Contact");
  }

  data.buffer.push("<section class=\"subheader\">\n  <ul>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submit", options) : helperMissing.call(depth0, "link-to", "submit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("li")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["components/google-maps"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"map-canvas\"></div>");
  
});

Ember.TEMPLATES["contact"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "get-involved-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page form\">\n  <form action=\"\">\n    <h1>Contact</h1>\n    <p>We're always eager to hear from you</p>\n    <ul>\n      <li><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Name (Required)\"></li>\n      <li><input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Email (Required)\"></li>\n    </ul>\n    <textarea name=\"message\" id=\"message\" placeholder=\"Message\"></textarea>\n    <input type=\"submit\" id=\"submit\"  class=\"submit\" value=\"Send\">\n  </form>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["expeditions"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n    <h1>expeditions</h1>\n</section>\n");
  
});

Ember.TEMPLATES["get_involved"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n          <img src=\"#\" alt=\"Submit a video\">\n          <p>Submit a video</p>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <img src=\"#\" alt=\"Volunteer\">\n          <p>Volunteer</p>\n        ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n          <img src=\"#\" alt=\"Contact\">\n          <p>Contact</p>\n        ");
  }

  data.buffer.push("<section class=\"page form\">\n    <h1>Get involved</h1>\n    <p>Wikitongues wouldn't be anywhere without our community. There are so many ways you can help out, or send us a message if you'd just like to reach out!</p>\n    <ul class=\"activities\">\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submit", options) : helperMissing.call(depth0, "link-to", "submit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contact", options) : helperMissing.call(depth0, "link-to", "contact", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n    </ul>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <section class=\"banner\">\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"Wikitongues\" class=\"fallback\">\n    </section>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Learn more here...");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n              <img src=\"#\" alt=\"User submissions\">\n              <p>User submissions</p>\n            ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n              <img src=\"#\" alt=\"Ambassadors\">\n              <p>Ambassadors</p>\n            ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n              <img src=\"#\" alt=\"Community\">\n              <p>Community</p>\n            ");
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page index\">\n    <div class=\"information\">\n        <h1>Every language in the world</h1>\n        <a class=\"youTubeLink\" href=\"https://www.youtube.com/user/WikiTongues\" target=\"_blank\">\n            <img src=\"img/youTubeLink.png\" alt=\"\">\n            <div class=\"triangle\"></div>\n            <p>Join us on YouTube</p>\n        </a>\n        <br>\n        <p>We are a group of motely motherfuckers who go out of our way to listen (and party with) to those around us. Our mission is to record every language in the world.</p>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("link"),
    'tagName': ("p")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <ul class=\"activities\">\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submit", options) : helperMissing.call(depth0, "link-to", "submit", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "team", options) : helperMissing.call(depth0, "link-to", "team", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </li>\n        </ul>\n        \n    </div>\n    &nbsp;\n  </section>");
  return buffer;
  
});

Ember.TEMPLATES["legal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n  <h1>Legal</h1>\n  <div class=\"legal\">\n    <h2>Terms of Service</h2>\n    <p>By submitting a video to Wikitongues, you hereby agree:</p>\n    <ol>\n      <li><p>to have secured the consent of the individual or individuals who appear in that video to record them,<b>very poorly phrased</b> </p></li>\n      <li><p>that you either possess or have obtained the legal rights to share this video online, and </p></li>\n      <li><p>that you irrevocably grant Wikitongues and its licensees, successors and assigns the right to license and distribute and use the video of you <b>what if the video is not of the person submitting?</b>, including your voice, picture, portrait or likeness as captured in a still image from the footage, in any and all media and for any use whatsoever (except illegal or pornographic), including without limitation, Wikitongues, art, stock, advertising, trade and promotion, in perpetuity.</p></li>\n    </ol>\n    <p>If you should receive a copy of the footage, you shall only use it for your own personal use and you shall not authorize anyone else to use it.</p>\n    <p><b>By submitting a video to Wikitongues</b>You agree and acknowledge that you have no commercial monetary rights to the footage and that Wikitongues owns all rights to the footage, including the right to copyright the footage.</p>\n    </div>\n    <div class=\"legal\">\n      <h2>Privacy Policy</h2>\n      <p>Wikitongues will never give or sell your personal information to any third-party organization or individual without your explicit consent.</p>\n    </div>\n</section>");
  
});

Ember.TEMPLATES["mission"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <section class=\"banner\">\n      <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt=\"Wikitongues\" class=\"fallback\">\n      <h1>");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n  </section>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "about-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page\">\n  <p class=\"drop\"> We stand for the values of diversity and respect between the all the peoples of Earth.</p>\n  <p>We stand for the rights of individuals and their communities to live where they live and to be who they are, thinking, speaking and acting freely.</p>\n  <p>We pledge to forge connections across vast geographies, building bridges of understanding within and between cultures, and ensuring that every person has access to the breadth and the beauty of human experience.</p>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["press"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n    <h1>press</h1>\n</section>");
  
});

Ember.TEMPLATES["projects"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Expeditions");
  }

  stack1 = helpers._triageMustache.call(depth0, "about-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page\">\n    <h1>Projects</h1>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("subheaderLink"),
    'tagName': ("p")
  },hashTypes:{'classNames': "STRING",'tagName': "STRING"},hashContexts:{'classNames': depth0,'tagName': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "expeditions", options) : helperMissing.call(depth0, "link-to", "expeditions", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["releaseForm"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n    <h1>Volunteering Guidelines</h1>\n    <p>By submitting a video to Wikitongues, you hereby agree: (1) to have secured the consent of the individual or individuals who appear in that video to record them, (2) that you either possess or have obtained the legal rights to share this video online, and (3) that you irrevocably grant Wikitongues and its licensees, successors and assigns the right to license and distribute and use the video of you, including your voice, picture, portrait or likeness as captured in a still image from the footage, in any and all media and for any use whatsoever (except illegal or pornographic), including without limitation, Wikitongues, art, stock, advertising, trade and promotion, in perpetuity. If you should receive a copy of the footage, you shall only use it for your own personal use and you shall not authorize anyone else to use it. You agree and acknowledge that you have no commercial monetary rights to the footage and that Wikitongues owns all rights to the footage, including the right to copyright the footage.</p>\n</section>");
  
});

Ember.TEMPLATES["submit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Video Guidelines");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Read Release Form");
  }

  stack1 = helpers._triageMustache.call(depth0, "get-involved-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page form\">\n  <form action=\"\">\n    <h1>Submit a video</h1>\n    <p>Support the Wikitongues community by submiting a video of your own.</p>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("secondaryLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "submitGuidelines", options) : helperMissing.call(depth0, "link-to", "submitGuidelines", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <ul>\n      <li><p>About you</p></li>\n      \n      <li>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'value': ("view.name"),
    'placeholder': ("Name (Required)")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'value': ("view.email"),
    'placeholder': ("Email (Required)")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</li>\n      <li>");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'value': ("view.link"),
    'placeholder': ("Link to Video File (Dropbox, Google Drive, Mediafire) (Required)")
  },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</li>\n      \n      \n    </ul>\n    <ul>\n      <li><p>About the speaker</p></li>\n      <li><input type=\"text\" id=\"speaker\" name=\"speaker\" placeholder=\"What is the speaker's name? (Required)\"></li>\n      <li><input type=\"text\" id=\"language\" name=\"language\" placeholder=\"What languages are used in this video? (Required)\"></li>\n    </ul>\n    <ul>\n      <li><p>About the video</p></li>\n      <li><input type=\"text\" id=\"videoLocation\" name=\"videoLocation\" placeholder=\"Where was this video made? (Required)\"></li>\n      <li><textarea name=\"transcription\" id=\"transcription\" class=\"optional\" placeholder=\"Transcribe the video (optional)\"></textarea></li>\n      <li><textarea name=\"translation\" id=\"translation\" class=\"optional\" placeholder=\"Translate the video (optional)\"></textarea></li>\n    </ul>\n    <p>Leave us a message</p>\n    <textarea name=\"message\" id=\"message\" class=\"optional\" placeholder=\"Message (optional)\"></textarea>\n    <ul>\n      <li><p>Release form</p></li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("secondaryLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "legal", options) : helperMissing.call(depth0, "link-to", "legal", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li><label for=\"releaseForm\"><input type=\"checkbox\" id=\"releaseForm\" name=\"check_list[]\" value=\"releaseForm\">I have read and accept the release form (Required)</label></li>\n    </ul>\n    <button type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'target': ("view")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">did</button>\n    <input type=\"submit\" id=\"submit\" class=\"submit\" value=\"Send\">\n  </form>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["submitGuidelines"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n    <h1>Video Guidelines</h1>\n    <p>By submitting a video to Wikitongues, you hereby agree: (1) to have secured the consent of the individual or individuals who appear in that video to record them, (2) that you either possess or have obtained the legal rights to share this video online, and (3) that you irrevocably grant Wikitongues and its licensees, successors and assigns the right to license and distribute and use the video of you, including your voice, picture, portrait or likeness as captured in a still image from the footage, in any and all media and for any use whatsoever (except illegal or pornographic), including without limitation, Wikitongues, art, stock, advertising, trade and promotion, in perpetuity. If you should receive a copy of the footage, you shall only use it for your own personal use and you shall not authorize anyone else to use it. You agree and acknowledge that you have no commercial monetary rights to the footage and that Wikitongues owns all rights to the footage, including the right to copyright the footage.</p>\n</section>");
  
});

Ember.TEMPLATES["team"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <li>\n                    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("photo"),
    'title': ("languages")
  },hashTypes:{'src': "STRING",'title': "STRING"},hashContexts:{'src': depth0,'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    <p>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                    <p class=\"country\">");
  stack1 = helpers._triageMustache.call(depth0, "location", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                </li>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                <img src=\"#\" alt=\"Become a volunteer today\">\n                <p>Become a volunteer today</p>\n              ");
  }

  data.buffer.push("<section class=\"banner team\">\n    \n    \n</section>\n");
  stack1 = helpers._triageMustache.call(depth0, "about-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page\">\n    <div class=\"team\">\n        <h1 class=\"drop\">Our team is composed of volunteers from all over the world</h1>\n        <ul>\n            ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <li class=\"volunteer\">\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteer", options) : helperMissing.call(depth0, "link-to", "volunteer", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </li>\n        </ul>\n    </div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["volunteer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Volunteering Guidelines");
  }

  stack1 = helpers._triageMustache.call(depth0, "get-involved-subheader", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<section class=\"page form\">\n  <form action=\"\">\n    <h1>Become a volunteer</h1>\n    <p>Apply to join our community as a volunteer or ambassador</p>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("secondaryLink")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "volunteerGuidelines", options) : helperMissing.call(depth0, "link-to", "volunteerGuidelines", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <ul>\n      <li><p>About you</p></li>\n      <li><input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Name (Required)\"></li>\n      <li><input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Email (Required)\"></li>\n      <li><input type=\"text\" id=\"location\" name=\"location\" placeholder=\"Location (Required)\"></li>\n    </ul>\n    <ul>\n      <li><p>How would you like to contribute?</p></li>\n      <li><label for=\"ambassador\"><input type=\"checkbox\" id=\"ambassador\" name=\"check_list[]\" value=\"Ambassador\">Language Recording</label></li>\n      <li><label for=\"socialMedia\"><input type=\"checkbox\" id=\"socialMedia\" name=\"check_list[]\" value=\"Social Media\">Social Media</label></li>\n      <li><label for=\"webDev\"><input type=\"checkbox\" id=\"webDev\" name=\"check_list[]\" value=\"Web Development\">Web Development</label></li>\n      <li><input type=\"text\" id=\"otherVolunteer\" name=\"\" placeholder=\"Other (Please specify)\"></li>\n    </ul>\n    <p>Please tell us a bit about yourself</p>\n    <textarea name=\"message\" id=\"message\" placeholder=\"What do you do?\"></textarea>\n    <input type=\"submit\" id=\"submit\"  class=\"submit\" value=\"Send\">\n  </form>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["volunteerGuidelines"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"page\">\n    <h1>Volunteering Guidelines</h1>\n    <p>By submitting a video to Wikitongues, you hereby agree: (1) to have secured the consent of the individual or individuals who appear in that video to record them, (2) that you either possess or have obtained the legal rights to share this video online, and (3) that you irrevocably grant Wikitongues and its licensees, successors and assigns the right to license and distribute and use the video of you, including your voice, picture, portrait or likeness as captured in a still image from the footage, in any and all media and for any use whatsoever (except illegal or pornographic), including without limitation, Wikitongues, art, stock, advertising, trade and promotion, in perpetuity. If you should receive a copy of the footage, you shall only use it for your own personal use and you shall not authorize anyone else to use it. You agree and acknowledge that you have no commercial monetary rights to the footage and that Wikitongues owns all rights to the footage, including the right to copyright the footage.</p>\n</section>");
  
});