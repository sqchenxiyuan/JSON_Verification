const TypeChecker = require("../ai/type-checker")

let boolean = new TypeChecker({
    typeName: 'boolean',
    checkFun: function(target, template, machine) {
        if (typeof target !== 'boolean') {
            throw TypeError("not a boolean!")
        }
    }
})

module.exports = boolean