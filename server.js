// Preliminary setup 
var http = require('http');
var fs = require('fs');
PORT = 8080;
var count = 0 ;

//serving static content
function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200 ;
    fs.readFile(__dirname + path, function (err, data){
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, 
                {'Content-Type': contentType });
                res.end(data);
        }
    });
}

// Request handler function
function requestHandler (req, res){
    // this function decices what to put as the message and status.
    // default message is Notfound and default status is 404 
    var message ;
    var status = 200;
    count += 1;

    switch (req.url) {
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;

        case '/home':
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;

        default :
            serveStaticFile(res, '/public/notfound.html', 'text/html');
            break ;
    };
    

    // logging to the console 
    console.log(req.method, req.url, status, message);

};
// Creates the web server and listens on PORT 
var server = http.createServer(requestHandler);
server.listen(PORT, function() {
    console.log('SERVER: Bro I am listening on port %d', PORT);
});
