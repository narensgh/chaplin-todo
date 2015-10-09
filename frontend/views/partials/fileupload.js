'use strict';
var View = require('../base_view'),
    Fileupload = require('blueimp-file-upload')
    ,
    FileuploadView = View.extend({
        initialize: function(options) {
            View.prototype.initialize.call(this);
            options.els.fileupload({
                url: '/oauthzf2/application/asset',
                dataType: 'json',
                maxFileSize: 104857600,
                acceptFileTypes: '/(.|\/)(tif|jpe?g|tiff)$/i',
                done: function(e, data) {
                    options.modelNew.imageSrc = data.result.imageSrc;
                }
            }).bind('fileuploadsubmit', function(e, data) {
                data.formData = options.formData || {assetType: null};
            })
        }
    });
module.exports = FileuploadView;
