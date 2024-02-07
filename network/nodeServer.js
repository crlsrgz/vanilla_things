const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer(function(request, response){
    response.writeHead(200, {'content-type':'text/html'});
    fs.createReadStream('index.html').pipe(response);

});

server.listen(PORT);
console.log(`server started at ${PORT}`);
