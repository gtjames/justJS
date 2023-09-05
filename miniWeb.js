let http = require("http");

http.createServer(function (request, response) {
    // Send the HTTP header. Without this line, the browser will still figure it out
    // HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
    console.log(request);
    // Send the response body as "Hello World"
    var d = new Date();
    response.end('<h3>Hello World</h3><hr>' + d.toString());
 }).listen(3000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:3000/');
