'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Datepicker = require('jquery-ui/datepicker'),
    // TokenField = require('bootstrap-tokenfield'),
    tokeninput = require('../../libs/jquery.tokeninput'),
    Chaplin = require('chaplin'),
    Fileupload = require('blueimp-file-upload'),
    TokenizerView = require('../partials/tokenizer'),
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
    events: {
        'click #date': 'openDatepicker'
    },
    initialize: function(options) {
        Chaplin.View.prototype.initialize.call(this);
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
        this.$(els.artupload).fileupload({
            url: 'data.php',
            maxFileSize: 104857600,
            acceptFileTypes: '/(.|\/)(tif|jpe?g|tiff)$/i',
            done: function(e, data) {
                console.log(data, 'done');
                $.each(data.result, function(index, file) {
                    console.log(index, file);
//                    $('<p/>').text(file.name).appendTo(document.body);
                });
            },
            add: function(e, data) {
                console.log(data, 'add');
                $("#uploadBtn").off('click').on('click', function() {
                    data.submit();
                });
            }
        });
    },
    openDatepicker: function() {
        this.$(els.datePicker).datepicker();
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
