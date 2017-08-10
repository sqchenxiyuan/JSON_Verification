const Checker = require('./checker')

class PluginChecker extends Checker {
    constructor(options) {
        //TODO:初始化
        super(options.checkFun)

        this.dependentProperties = options.dependentProperties || [] //*依靠的属性，当存在这些属性的时候才执行check
    }

    getDependentProperties() {
        return this.dependentProperties
    }
}

module.exports = PluginChecker