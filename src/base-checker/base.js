function baseObj(options) {
    if(!options.check || typeof options.check !== 'function'){
        throw "ERROR: check function must have!"
    }

    this.check = options.check;

    this.plugins = options.plugins || [];//扩展插件
}

baseObj.prototype.runCheck = function(target, template) {
    //TODO 检测的逻辑

    //自身检测
    try {
        this.check(target, template)

        this.plugins.forEach(function(plugin){
            plugin.check(target, template);
        })
    } catch(e) {
        throw e;
    }

    //child检测
    console.log("maybe success")
}

baseObj.prototype.check = function(target) {
    throw "ERROR: invalid check function";
}


baseObj.prototype.appendPlugin = function(plugin) {
    //TODO 插件的检测
    this.plugins.push(plugin)
}


module.exports = baseObj;