//eg 1
const promise=()=>{
    return new Promise(function(resolve,reject)
    {
        let error=true;
        if(error)
        resolve("promise is rejected");
        else
        reject ("promise is resolved");
    } 
    )
}
promise().then(message=>console.log(message)).catch(err=>console.log(err));

//eg 2
let mypromise=new Promise(function (myresolve,myreject)
{
    let error=false;
    if(error)
myreject();
else
myresolve();
});
mypromise.then(
    function (value){ console.log("promise is resolved");},
    function (error) { console.log("promise is rejected");}
);

//eg3
let promise1=new Promise(function(resolve,reject)
{
    let a=5;
    let b=15;
    if(a==b)
    resolve();
    else
    reject();
});
promise1.then(function()
{
    console.log("Matched");
}
).
catch(function()
{
    console.log("Not Matched");
});

//eg4
let calculate=(no)=>{
    return new Promise(function(resolve,reject)
{
    if(no==1)
    resolve("no is 1");
    else if(no==2)
    resolve("no is 2");
    else if(no==3)
    resolve("no is 3");
    else
    reject("no greater than 3");
})};
calculate(2).then(message=>{
    console.log(message);
}).then(message=>{
    console.log(message);
}).then(message=>{
    console.log(message);
}).then(message=>{
    console.log(message);
}).catch(message=>{
    console.log(message);
});
