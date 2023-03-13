const { similarity } = require("./utils")

let a = new similarity(/how are ([\w]+)/)
console.log(a.getPercentage("how are you"))