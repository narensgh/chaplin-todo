'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');
Backbone.$ = $;
var Chaplin = require('chaplin'),
Application = Chaplin.Application.extend({
        initialize: function(options) {
            console.log('Application.prototype.initialize.call');
        Chaplin.Application.prototype.initialize.call(this, options);
    }
});

$(document).ready(function() {
    new Application({
        title: 'Leave Application',
        root: '/chaplin-todo/',
        routes: function(match) {
            match('', 'leave#index');
        }
    });
});