import http from "http";
import fs from "fs";
const PORT = process.env.PORT;

const handleReadFile=(fileName,statusCode,req,res) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
      }
    });
}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        handleReadFile("index.html", 200, req, res);
    }
    else if (req.url === "/about") {
        handleReadFile("about.html", 200, req, res);
    }
    else if (req.url === "/contact") {
        handleReadFile("contact.html", 200, req, res);
    }
    else {
        handleReadFile("404.html", 200, req, res);
    }
});

server.listen(PORT, () => {
    console.log(`server is running`);
});