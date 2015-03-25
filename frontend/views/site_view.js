'use strict';
var AppView = require('./base_view');
// SiteView
var SiteView = AppView.extend({
// Container for this view. Chaplin attribute.
    container: 'body',
// ID for container. Backbone attribute.
    id: 'page',
// Regions of the page. Chaplin attribute.
    regions: {
        'header': '#header',
        'content': '#content',
        'footer': '#footer'
    },
// Handlebars template for the page. Chaplin attribute.
    template: require('../templates/site.hbs')
});
module.exports = SiteView;