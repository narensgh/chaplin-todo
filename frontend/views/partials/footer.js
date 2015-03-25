'use strict';
var View = require('../base_view');
var FooterView = View.extend({
    region: 'footer',
    className: 'container',
    template: require('../../templates/partials/footer.hbs')
});
module.exports = FooterView;