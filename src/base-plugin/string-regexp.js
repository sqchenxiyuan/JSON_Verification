var basePlugin = require("./plugin-base");

var stringRegexp = new basePlugin({
    check: function(target, tpl){
        if(tpl.RegExp){
            var reg = new RegExp(tpl.RegExp);
            if(!reg.test(target)){
                throw "ERROR: not pass Reg"
            }
        }
        return true;
    }
})
module.exports = stringRegexp;