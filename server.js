let http = require("http");
let fs = require("fs");

const PORT = 8081;

fs.readFile("./index.html", (err, html) => {
  if (err) throw err;
  http
    .createServer((req, res) => {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    })
    .listen(PORT);
  console.log(`Listening on port ${PORT}`);
});
