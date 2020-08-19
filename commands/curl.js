const request = require("request");

module.exports = (done, url) =>
  request(url, function (err, response, body) {
    if (err) throw err;
    done(body);
  });
