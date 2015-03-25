'use strict';

var Chaplin = require('chaplin');
//    SiteView = require('../views/site_view');
//    HeaderView = require('../views/partials/header');

var LeaveController = Chaplin.Controller.extend({
// Set up the site view and the headers and footers
    initialize: function() {
        Chaplin.Controller.prototype.initialize.call(this);
        console.log('initialize called');
    },
    beforeAction: function(params, route, options) {
        console.log('beforeAction called');
        Chaplin.Controller.prototype.beforeAction.call(this);
//        this.reuse('site', SiteView);
//        this.reuse('header', HeaderView);
//        this.reuse('footer', FooterView);
    },
    index: function(params, route, options) {
        console.log('index called');
//        this.view = new IndexView({
//            region: 'content',
//        });
    }
});
module.exports = LeaveController;