let PluginChecker = require("../ai/plugin-checker")

let numberMin = new PluginChecker({
    dependentProperties: ["min"],
    checkFun: function(target, tpl) {
        if(target < tpl.min){
            throw `ERROR: must bigger than ${tpl.min}`
        }
        return true
    }
})
module.exports = numberMin