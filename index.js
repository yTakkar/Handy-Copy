var ToClipboard = require('./toClipboard');

/**
 * Copies the given text and executes done() when finished copying.
 * @param {Object} options 
 * @param {String} options.text
 * @param {Function} options.done
 */
function HandyCopy(options) {
    var defaults = {
        text: '',
        done: function(){ return; }
    }
    var settings = Object.assign({}, defaults, options);
    var 
        text = settings.text,
        done = settings.done;

    ToClipboard(text);
    done();

}

module.exports = HandyCopy;