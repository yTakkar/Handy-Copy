var $ = require('jquery');
var ToClipboard = require('./toClipboard')

function HandyCopy(options){
    var defaults = {
        selector: null,
        value: null,
        done: function(){ return; }
    }
    var settings = Object.assign({}, defaults, options);
    var 
        selector = settings.selector,
        value = settings.value,
        done = settings.done;

    selector.on('click', function(e){
        e ? e.preventDefault() : null;
        var text = (value == null) ? $(this).data('copy') : value;
        ToClipboard(text);
        done();
    });

}

module.exports = HandyCopy