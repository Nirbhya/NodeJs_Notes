var http=require('http');
var staff=require('./Notes/public/data/staff.json');

var server=http.createServer(function(req,res){

    if(req.url==='/'){
        res.writeHead(200,{"Content-Type":"text/json"});
        res.end(JSON.stringify(staff));
    }else if(req.url==='/rollno'){
        var data = staff.filter(function(item){
            console.log("Roll No Searching ");
            return item.roll_no === "1900290149067";
        });
        res.writeHead(200,{"Content-Type":"text/json"});
        res.end(JSON.stringify(data));
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("Error: Data not found...");
    };

});

server.listen(700,function(){
    console.log("Listening at port 700...");
})