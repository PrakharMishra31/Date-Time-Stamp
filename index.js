const http = require("http");
const PORT = 8000;
const fs = require("fs");

try {
  http
    .createServer((req, res) => {
      res.writeHeader(200, "Success", { "Content-Type": "application/json" });
      let d = new Date();

      fs.writeFile(`DateTime/${d.toDateString()}.txt`, d.toString(), (err) => {
        if (err) {
          console.log(err);
        } else {
          fs.readFile(`DateTime/${d.toDateString()}.txt`, (err, data) => {
            res.write(data);
            res.end();
          });
        }
      });
    })
    .listen(PORT, () => {
      console.log("Server is up on ", PORT);
    });
} catch (err) {
  console.log(err);
}
