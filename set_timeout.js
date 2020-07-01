/*Program is written by Nirbhay Kaushik.
    http://www.youtube.com/techfully
    
    Syntax : 
        setTimeout(callback,delay,[....,args]);
        clearTimeout(timerID);
*/

function fun(fname,lname)
{
    console.log(`Hello ${fname} ${lname}`);
}

const timerID=setTimeout(fun,1000,"Nirbhay","Kaushik");

console.log("Terminate setTimeout using clearTimeout()");

clearTimeout(timerID);


setTimeout(()=>{
    console.log("After 2 seconds");
},2*1000);