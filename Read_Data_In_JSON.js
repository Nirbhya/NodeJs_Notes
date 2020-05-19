var http=require('http');
var staff=require('./Notes/public/data/staff.json');

var server=http.createServer(function(req,res){

    if(req.url==='/'){
        res.writeHead(200,{"Content-Type":"text/json"});
        res.end(JSON.stringify(staff));
    }

});

server.listen(700,function(){
    console.log("Listening at port 700...");
})