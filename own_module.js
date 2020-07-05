/*

Add these lines of codes in your second file.
my file location is ./Notes/public/sum.js

const sum=function(a,b)
{
    return a+b;
}

module.exports=sum;

*/
// This program is written by Nirbhay Kaushik
// http://www.youtube.com/techfully


var sum=require('./Notes/public/sum');
var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`The sum of 10+7 is : ${sum(10,7)}`);
    res.end();
}).listen(700);

console.log("Server listen at 700 port");