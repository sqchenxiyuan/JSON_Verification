const templateTranslate = require("./template/template-translate.js");

function check (originData, template, callback) {
    return new Promise((resolve, reject) => {
        console.log(originData, template)
        template = templateTranslate(template);


        resolve({})
    });
}

module.exports = check;