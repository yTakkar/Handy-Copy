var ToClipboard = require('./toClipboard')

function HandyCopy(options){
    var defaults = {
        value: null,
        done: function(){ return; }
    }
    var settings = Object.assign({}, defaults, options);
    var 
        value = settings.value,
        done = settings.done;

    ToClipboard(value);
    done();

}

module.exports = HandyCopy