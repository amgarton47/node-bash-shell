const fs = require("fs");

module.exports = (done, fileName) => {
  const data = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  done(data.sort().join("\n"));
};
