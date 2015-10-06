'use strict';
var View = require('../base_view'),
    tokeninput = require('../../libs/jquery.tokeninput'),
    TokenizerView = View.extend({
        initialize: function(options) {
            View.prototype.initialize.call(this);
            options.els.tokenInput(options.tokens, {
                noResultsText: options.noResultsText,
                searchingText: options.searchingText
            });
        }
    });
module.exports = TokenizerView;


