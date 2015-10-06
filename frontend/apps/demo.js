'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');
Backbone.$ = $;
var Chaplin = require('chaplin'),
    Application = Chaplin.Application.extend({
        title: 'Project Management',
        initialize: function(options) {
            Chaplin.Application.prototype.initialize.call(this, options);
        }
    });

$(document).ready(function() {
    new Application({
        root: '/chaplin-todo/demo.html',
        routes: function(match) {
            match('', 'demo#index');
        }
    });
});
