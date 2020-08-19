const fs = require("fs");

module.exports = (done, fileName) =>
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    done(data);
  });
