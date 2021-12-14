var http = require("http");

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    // Send the response body as "Hello World"
    response.end("<html> <head>server Response</head><body bgColor='red'><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');