const pwd = require("./commands/pwd");
const ls = require("./commands/ls");
const cat = require("./commands/cat");
const curl = require("./commands/curl");
const date = require("./commands/date");
const echo = require("./commands/echo");
const head = require("./commands/head");
const tail = require("./commands/tail");
const sort = require("./commands/sort");
const wc = require("./commands/wc");
const uniq = require("./commands/uniq");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const input = data.toString().trim().split(" ");
  const [cmd, arg] = input;

  switch (cmd) {
    case "pwd":
      pwd(done);
      break;
    case "ls":
      ls(done);
      break;
    case "cat":
      cat(done, arg);
      break;
    case "curl":
      curl(done, arg);
      break;
    case "date":
      date(done);
      break;
    case "echo":
      echo(done, arg);
      break;
    case "head":
      head(done, arg);
      break;
    case "tail":
      tail(done, arg);
      break;
    case "sort":
      sort(done, arg);
      break;
    case "wc":
      wc(done, arg);
      break;
    case "uniq":
      uniq(done, arg);
      break;
    case "":
      process.stdout.write("prompt > ");
      break;
    default:
      process.stdout.write(`${cmd}: command not found`);
      process.stdout.write("\nprompt > ");
  }
});
