const { time } = require("console");

module.exports = (done) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateNum = date.getDate();

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();

  const timeZone = date
    .toTimeString()
    .split("(")[1]
    .slice(0, -1)
    .split(" ")
    .reduce((acc, word) => (acc += word[0]), "");

  const year = date.getFullYear();

  done(
    `${day} ${month} ${dateNum} ${hour}:${minutes}:${seconds} ${timeZone} ${year}`
  );
};
