var http = require('http');
var dt = require('./modules/dateTime');
http.createServer(function(req, res){
    res.writeHead(200,{'content-tyope':'text/html'});
    res.write('the current date time is :<br>'+ dt.currentDateTime());
    res.end('');


    }).listen(8080);

