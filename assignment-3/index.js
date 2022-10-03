const fs = require("fs");
var http = require("http");

let fileName = "index.html";
let fileContent = "<h1>Hello world</h1><p>This is Vignesh D</p>";
const myFileWriter = async (fileName, fileContent) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
myFileWriter(fileName, fileContent);

fs.readFile(fileName, "utf-8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log("server Started");
  console.log(err);
  http
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    })
    .listen(5000);
});
