const fs = require("fs")

module.exports = (done) => fs.readdir("./", "utf8", (err, data) => {
    if(err) throw err
    done(data.join("      "))
})