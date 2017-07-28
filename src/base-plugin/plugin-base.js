function basePlugin(options){
    if(!options.check || typeof options.check !== 'function'){
        throw "ERROR: check function must have!"
    }

    this.check = options.check;
}

basePlugin.prototype.check = function(target) {
    throw "ERROR: invalid check function";
}

module.exports = basePlugin;
