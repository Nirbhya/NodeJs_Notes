/* Program is written by Nirbhay Kaushik.
    http://www.youtube.com/techfully
    
    Syntax : setInterval(function,delay,args,args,...);
*/

const fun=(fname,lname)=>{
    console.log(`My name is ${fname} ${lname}`);
}

setInterval(fun,1*1000,"Nirbhay","Kaushik");
setInterval(fun,5*1000,"Shivam","Gupta");


const count=0;
const loop=()=>{
    console.log(count);
    count++;
    if(count==6)
    {
        console.log("its work");
        clearInterval(timerID);
    }
}

const timerID=setInterval(loop,1*1000);