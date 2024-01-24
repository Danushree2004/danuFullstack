
async function myAfunc()
{
     return new Promise(function(resolve)
    {
        setTimeout(function(){
        resolve("another nessage!");
    },2000);
    });
}
async function myDisplay()
{
    let myPromise= new Promise(function(resolve)
    {
        setTimeout(function(){
        resolve("like");
    },3000);
    });



//use promise.all to run both promise concurrently
const[result1,result2]=await Promise.all([myPromise,myAfunc()]);
console.log(result1);
console.log(result2);
}
myDisplay();


