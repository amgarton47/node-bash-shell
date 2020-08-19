const fs = require("fs");

module.exports = (done, fileName) => {
  const data = fs.readFileSync(fileName, "utf-8").split("\n");
  done(
    data.reduce((acc, line, idx) => {
      if (idx < 9) {
        acc += line + "\n";
      } else if (idx === 9) {
        acc += line;
      }
      return acc;
    }, "")
  );
};
