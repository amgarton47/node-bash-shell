const fs = require("fs");

module.exports = (done, fileName) => {
  const data = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  const unique = data
    .reverse()
    .filter((line, idx) => !data.slice(idx + 1).includes(line));
  done(unique.reverse().join("\n"));
};
