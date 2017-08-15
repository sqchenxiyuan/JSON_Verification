const checkMacine = require("../src/ai/macine")

const macine = new checkMacine()

try {
    macine.check(null, {
        type: "null",
        // RegExp:"^\\d{3}$",
        // min:1
    })
    console.log("success")
} catch (err) {
    throw err
}