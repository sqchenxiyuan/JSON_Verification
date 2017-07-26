function baseObj() {



    this.plugins = [];//扩展插件
}

baseObj.prototype.runCheck = function(target) {
    //TODO 检测的逻辑

    try {
        this.check(target)
    } catch(e) {
        
    }
}

baseObj.prototype.check = function(target) {
    throw "ERROR: invalid check function";
}


baseObj.prototype.appendPlugin = function(plugin) {
    //TODO 插件的检测
    this.plugins.push(plugin)
}