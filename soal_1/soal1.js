var http = require('http');
var funcMINMAX = require('./function');
var arrayVal = [-5, 12, 11, -25, 2, 12345];

http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  
  res.writeHead(200, {'Content-Type': 'text/html'});
 
  console.log(arrayVal);
  res.write('Jawaban Soal Pemograman 1<br>=====================<br>');
  res.write("Array : " + arrayVal.toString() + '<br>');
  
  res.write("MIN: " + funcMINMAX.CEK_MIN(arrayVal) + '<br>');
  res.write("MAX: " + funcMINMAX.CEK_MAX(arrayVal) + '<br>');
  
  res.end();
}).listen(8080);