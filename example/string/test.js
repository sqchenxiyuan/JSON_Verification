const check = require("../../src/index.js");
const template = require("./template.json");

const data = "adadasdasdasdasd"
check(data, template).then(_ => {
    console.log(_)
}).catch(err => {
    console.log(err)
})