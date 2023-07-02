const fs = require("fs");

const requestHandler = (req,res)=> {

    const url = req.url;
    const method = req.method;
    res.setHeader('Content-type','text/html');
    
    if (url === "/") {
      res.write("<html>");
      res.write(fs.readFileSync("message.txt"));
      res.write('<body><form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Send</button></form></body>' );
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedbody = Buffer.concat(body).toString();
        const message = parsedbody.split("=")[1];
        fs.writeFileSync("message.txt", message);
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }

}

module.exports= requestHandler;
