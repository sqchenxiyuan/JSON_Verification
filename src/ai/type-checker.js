const Checker = require('./checker')
const PluginChecker = require('./plugin-checker')

/*
 * 
 *
 *
 *
 */

class TypeChecker extends Checker {

    constructor(options) {
        super(options.checkFun)
        //TODO:初始化
        if (!options.typeName) {
            throw "need typeName"
        }

        this.typeName = options.typeName //* 类型名称
        this.pluginArray = [] //* 插件注册表
        this.pluginReuiredMap = [] //* 插件需求标记列表
        this.popertyReuiredMap = {} //* 插件属性依赖 每个属性对应一个数组，记录需要这个属性的插件Index
        this.appendPlugins(options.plugins || [])
    }

    check(target, template, machine) {
        this.checkFun(target, template, machine)

        let activePlugins = []
        for (let key in template) {
            let popertyReuired = this.popertyReuiredMap[key]
            popertyReuired.forEach(index => {
                let pluginReuired = this.pluginReuiredMap[index]
                pluginReuired.count++

                if (pluginReuired.count === pluginReuired.need) {
                    activePlugins.push(this.pluginArray[index])
                }
            })
        }

        popertyReuired.forEach(index => {
            let pluginReuired = this.pluginReuiredMap[index]
            pluginReuired.count = 0
        })

        activePlugins.forEach(plugin => {
            plugin.check(target, template, machine)
        })
    }

    appendPlugin(pluginChecker) {
        //TODO:加载插件的处理
        if (!(pluginChecker instanceof PluginChecker)) {
            throw TypeError("plugin must be a PluginChecker")
        }
        let index = this.pluginArray.length
        let dependentProperties = pluginChecker.getDependentProperties()

        this.pluginArray.push(pluginChecker)
        this.pluginReuiredMap.push({
            count: 0,
            need: dependentProperties.length
        })

        dependentProperties.forEach(property => {
            if (!this.popertyReuiredMap[property]) {
                this.popertyReuiredMap[property] = []
            }
            this.popertyReuiredMap[property].push(index)
        })
    }

    
    appendPlugins(pluginCheckers) {
        if (!Array.isArray(pluginCheckers)) {
            throw TypeError("pluginCheckers must be a Array")
        }
        pluginCheckers.forEach(pluginChecker => this.appendPlugin(pluginChecker))
    }
    
}

module.exports = TypeChecker