var http = require('http');
var newMod = require('./module_3');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(newMod.balance());
    response.write(newMod.usdAmount());
    response.end();
}).listen(3000);

console.log('Listening on port 3000');