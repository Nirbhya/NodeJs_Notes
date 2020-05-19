//  HTTP Module - Creating Web Server

var http=require('http');


// http.createServer(function(req,res){

//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.write("Request received by : "+req.url+"<br/>");
//     res.write("Hello Server");
//     res.end;

// }).listen(200);



http.createServer((req,res)=>{

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Request received by : "+req.url+"<br/>");
    res.write("Hello Server");
    res.end;

}).listen(200);