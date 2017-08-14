const checkMacine = require("../src/ai/macine")

const macine = new checkMacine()

try {
    macine.check(1, {
        type: "number",
        RegExp:"^\\d{3}$",
        max:1,
        min:3
    })
    console.log("success")
} catch (err) {
    throw err
}