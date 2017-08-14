const TypeChecker = require("../ai/type-checker")

let string = new TypeChecker({
    typeName: 'number',
    checkFun: function(target, template, machine) {
        if (typeof target !== 'number') {
            throw TypeError("not a number!")
        }
    }
})

module.exports = string