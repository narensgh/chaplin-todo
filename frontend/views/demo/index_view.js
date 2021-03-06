'use strict';
var $ = require('jquery'),
    _ = require('underscore'),
    Datepicker = require('jquery-ui/datepicker'),
    tokeninput = require('../../libs/jquery.tokeninput'),
    Chaplin = require('chaplin'),
    TokenizerView = require('../partials/tokenizer'),
    FileuploadView = require('../partials/fileupload'),
    template = require('../../templates/demo/index.hbs');
var els = {
    datePicker: '#date',
    dialogMessage: '#dialog-message',
    artupload: '#artupload',
    tokenizer: '#tokenizer-demo'
};
var IndexView = Chaplin.View.extend({
    template: template,
    region: 'content',
    modelNew: {},
    events: {
        'click #date': 'openDatepicker'
    },
    initialize: function(options) {
        Chaplin.View.prototype.initialize.call(this);
        this.listenTo('change', this.modelNew, this.changed);
    },
    render: function(options) {
        Chaplin.View.prototype.render.call(this);
        this.setupFileUpload();
        this.setupTokenizer();
    },
    setupTokenizer: function() {
        var tokens = [
            {id: 7, name: "Ruby"},
            {id: 11, name: "Python"},
            {id: 13, name: "JavaScript"},
            {id: 17, name: "ActionScript"},
            {id: 19, name: "Scheme"},
            {id: 23, name: "Lisp"},
            {id: 29, name: "C#"},
            {id: 31, name: "Fortran"},
            {id: 37, name: "Visual Basic"},
            {id: 41, name: "C"},
            {id: 43, name: "C++"},
            {id: 47, name: "Java"}
        ],
            options = {
                tokens: tokens,
                searchingText: 'searching..',
                noResultsText: 'Invite..?',
                els: this.$(els.tokenizer)
            };
        this.subview('tokenizer', new TokenizerView(options));
    },
    setupFileUpload: function() {
        this.modelNew.imageSrc = '';
        var options = {
            els: this.$(els.artupload),
            formData: {
                assetType: 'PM_LOGO',
                uniqueId: 1
            },
            modelNew: this.modelNew
        };
        this.subview('tokenizer', new FileuploadView(options));
        console.log(this.modelNew);
    },
    openDatepicker: function() {
        this.$(els.datePicker).datepicker();
    },
    changed: function() {
        console.log(this.modelNew, 'changed');
    },
    getTemplateData: function() {
        var data = Chaplin.View.prototype.getTemplateData.call(this);
        return data;
    },
    getTemplateFunction: function() {
        return this.template;
    }

});
module.exports = IndexView;
