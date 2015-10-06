'use strict';

var Chaplin = require('chaplin'),
    $ = require('jquery'),
    SiteView = require('../views/site_view'),
    HeaderView = require('../views/partials/header'),
    FooterView = require('../views/partials/footer'),
    IndexView = require('../views/demo/index_view');

var PmController = Chaplin.Controller.extend({
    initialize: function(params, route, options) {
        Chaplin.Controller.prototype.initialize.call(this);
        
    },
    beforeAction: function(params, route, options) {
        Chaplin.Controller.prototype.beforeAction.call(this);
        this.reuse('site', SiteView);
//        this.reuse('header', HeaderView);
//        this.reuse('footer', FooterView);
    },
    // launch app by displaying projects
    index: function(params, route, options) {        
        this.reuse('projectsView', IndexView, {
        });
    }
   
});
module.exports = PmController;
