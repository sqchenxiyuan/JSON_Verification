let PluginChecker = require("../ai/plugin-checker")

let stringRegexp = new PluginChecker({
    dependentProperties: ["RegExp"],
    checkFun: function(target, tpl) {
        if (tpl.RegExp) {
            let reg = new RegExp(tpl.RegExp)
            if (!reg.test(target)) {
                throw "ERROR: not pass Reg"
            }
        }
        return true
    }
})
module.exports = stringRegexp