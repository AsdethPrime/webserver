// Preliminary setup 
var http = require('http');
PORT = 8080;
var count = 0 ;

// Request handler function
function requestHandler (req, res){
    // this function decices what to put as the message and status.
    // default message is Notfound and default status is 404 
    var message ;
    var status = 200;
    count += 1;

    switch (req.url) {
        case '/manish':
            message = 'My Lord has arrived, I bow before your granduer!!!!';
        break;

        case '/hello':
            message = 'World!';
        break;

        default :
            status = 404 ;
            message = "Not found";
            break ;
    };
    // Writing the header of response 
    res.writeHead(201, {
        'Content-Type':'text/plain'
    });    

    // logging to the console 
    console.log(req.method, req.url, status, message);

    // sending out the response
    res.end(message);
};

// Creates the web server and listens on PORT 
var server = http.createServer(requestHandler);
server.listen(PORT, function() {
    console.log('SERVER: Bro I am listening on port %d', PORT);
});
