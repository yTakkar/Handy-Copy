var $ = require('jquery');
var ToClipboard = require('./toClipboard')

(function($){
    $.fn.HandyCopy = function(options){
        var 
            defaults = { value: null },
            settings = $.extend({}, defaults, options)
            elem = $(this)
            value = settings.value;
        
        elem.on('click', function(e){
            e ? e.preventDefault : null;
            var message = value ? elem.data('copy') : value;
            ToClipboard(message);
        })

    }
}(jQuery));