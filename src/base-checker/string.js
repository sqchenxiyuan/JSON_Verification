var CheckBase = require("./base.js");

var regPlugin = require("../base-plugin/string-regexp.js")

var string = new CheckBase({
    check: function(target) {
        if(typeof target !== 'string'){
            throw "ERROR: not String"
        }

        return true;
    },
    plugins:[
        regPlugin
    ]
})

module.exports = string;