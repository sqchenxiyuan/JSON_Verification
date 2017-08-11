const TypeChecker = require("../ai/type-checker")

let string = new TypeChecker({
    typeName: 'string',
    checkFun: function(target, template, machine) {
        if (typeof target !== 'string') {
            throw TypeError("not a string!")
        }
    }
})

module.exports = string