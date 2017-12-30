var $ = require('jquery');
var ToClipboard = require('./toClipboard')

function HandyCopy(options){
    var defaults = {
        selector: null,
        value: null,
        callback: function(){ return; }
    }
    var settings = Object.assign({}, defaults, options);
    var 
        selector = settings.selector,
        value = settings.value,
        callback = settings.callback;

    selector.on('click', function(e){
        e ? e.preventDefault() : null;
        var text = (value == null) ? $(this).data('copy') : value;
        ToClipboard(text);
        callback();
    });

}

module.exports = HandyCopy