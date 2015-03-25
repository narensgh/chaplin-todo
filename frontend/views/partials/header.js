'use strict';
var View = require('../base_view');
var HeaderView = View.extend({
    region: 'header',
    className: 'container',
    template: require('../../templates/partials/header.hbs')
});
module.exports = HeaderView;