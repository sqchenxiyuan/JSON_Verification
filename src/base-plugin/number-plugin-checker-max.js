let PluginChecker = require("../ai/plugin-checker")

let numberMax = new PluginChecker({
    dependentProperties: ["max"],
    checkFun: function(target, tpl) {
        if(target > tpl.max){
            throw `ERROR: must smaller than ${tpl.max}`
        }
        return true
    }
})
module.exports = numberMax