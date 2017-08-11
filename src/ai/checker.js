class Checker {

    constructor(checkFun) {
        if (typeof checkFun !== 'function') {
            throw TypeError("checkfun need a function")
        }
        this.checkFun = checkFun
    }

    check(target, template, machine) {
        return this.checkFun(target, template, machine)
    }

}

module.exports = Checker