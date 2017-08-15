const TypeChecker = require("../ai/type-checker")

let Null = new TypeChecker({
    typeName: 'null',
    checkFun: function(target, template, machine) {
        if (target !== null) {
            throw TypeError("not a null!")
        }
    }
})

module.exports = Null