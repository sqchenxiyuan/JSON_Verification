const TypeChecker = require('./type-checker')

//string
const stringChecker = require("../base-checker/type-checker-string")
stringChecker.appendPlugin(require("../base-plugin/string-plugin-checker-regexp"))//正则表达式插件

//number
const numberChecker = require("../base-checker/type-checker-number")
numberChecker.appendPlugin(require("../base-plugin/number-plugin-checker-min"))//最小
numberChecker.appendPlugin(require("../base-plugin/number-plugin-checker-max"))//最大

//boolean
const booleanChecker = require("../base-checker/type-checker-boolean")

//null
const nullChecker = require("../base-checker/type-checker-null")


class checkMacine {
    constructor() {

        this.typeMap = {} //* 类型集合
        this._defaultInit()
    }

    check(target, template) {
        let type = template.type
        try {
            this.typeMap[type].check(target, template, this)
        } catch (e) {
            throw e
        }
    }

    _appendType(name, typeChecker) { //添加类型，私有
        if (!(typeChecker instanceof TypeChecker)) {
            throw TypeError("typeChecker must be a TypeChecker")
        }

        name = name.toLowerCase()

        if (this.typeMap[name]) {
            throw Error(`exist a type name as ${name}`)
        }

        this.typeMap[name] = typeChecker
    }

    appendType() {
        if (arguments.length === 1) {
            this._appendType(arguments[0].typeName, arguments[0])
        } else if (arguments.length === 2) {
            this._appendType.apply(this, arguments)
        } else {
            throw SyntaxError("append type only support 2 arguments")
        }
    }

    _defaultInit() {
        this.appendType(stringChecker)
        this.appendType(numberChecker)
        this.appendType(booleanChecker)
        this.appendType(nullChecker)
    }
}

module.exports = checkMacine