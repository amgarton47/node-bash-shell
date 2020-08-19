const { stderr } = require("process")

module.exports = (done) => {
    done(process.cwd())
}