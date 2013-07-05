var express = require('express');

var buff = fs.readFileSync("/home/ubuntu/bitstarter/index.html")

var str = Buffer.toString(buff)

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
