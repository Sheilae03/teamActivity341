const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1 </title>');
    res.write('<body><form action="/create-userName" method="POST"><input type="text" name="userName" ><button type="submit">Send</button></form></body>');
    res.write('</html>');
     return res.end(); 
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1 </title>');
    res.write('<body><ul><li>User 1</li><li>User2</li></ul></body>');
    res.write('</html>');
     return res.end(); 
    }
    if (url === '/create-userName') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
    
});


server.listen(3003);