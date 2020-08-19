const fs = require("fs");

module.exports = (done, fileName) => {
  const data = fs.readFileSync(fileName, "utf-8").trim().split("\n");
  const length = data.length;
  done(
    data.reduce((acc, line, idx) => {
      if (idx === length - 1) {
        acc += line;
      } else if (idx > length - 10) {
        acc += line + "\n";
      }
      return acc;
    }, "")
  );
};
