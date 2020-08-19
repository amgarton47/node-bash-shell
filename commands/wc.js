const fs = require("fs");

module.exports = (done, fileName) => {
  const data = fs.readFileSync(fileName, "utf-8").trim();

  const lineCount = data.split("\n").length;
  const wordCount = data.split(" ").filter((word) => word !== "").length;
  const byteCount = data.split("").length;
  done(`      ${lineCount}      ${wordCount}      ${byteCount}`);
};
