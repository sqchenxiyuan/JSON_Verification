// const templateTranslate = require("./template/template-translate.js");

// function check (originData, template, callback) {
//     return new Promise((resolve, reject) => {
//         console.log(originData, template)
//         template = templateTranslate(template);


//         resolve({})
//     });
// }

// module.exports = check;

var type_String = require("./base-checker/string");


function JVer() {
    this.types = {};

    this.init();
}

JVer.prototype.init = function(){
    this.appendType("string", type_String);
}

JVer.prototype.runCheck = function(target, template){
    var type = template.type;

    try {
        this.types[type].runCheck(target, template);
    } catch(e) {
        console.log(e);
    }
}

JVer.prototype.appendType = function(typeName, type){
    if(this.types[typeName]){
        throw "ERROR: exist type";
    }
    
    this.types[typeName] = type;
}


module.exports = JVer;