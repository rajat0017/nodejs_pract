const http= require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    if(req.url=='/home'){
        res.write('<html>');
        res.write('<body><p>welcome to home page</p></body>')
        res.write('</html>');
        res.end();
    }
    else if(req.url=='/about'){
        res.write('<html>');
        res.write('<body><p>welcome to About us page</p></body>')
        res.write('</html>');
        res.end();
    }
    else if (req.url=='/node'){
        res.write('<html>');
        res.write('<body><p>welcome to my NodeJS Project</p></body>')
        res.write('</html>');
        res.end();
    }
   
})

server.listen(3000);