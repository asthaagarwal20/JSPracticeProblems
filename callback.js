//callback
//eg 1
function sum(a,b,callback)
{
    let addition=a+b;
    console.log(addition);
    callback(5,6);
}
function sum2(a,b)
{
    let ans=a+b;
    console.log("sum2 "+ans);
}
sum(10,20,sum2);


//eg 2
function greet(name)
{
    console.log("hello "+name);
}
function input(callback)
{
    let name="astha";
    callback(name);
}
input(greet);


//eg 3
function multipleCallback(firstCallback,secondCallback,thirdCallback)
{
    firstCallback(2,4);
    secondCallback(16,4);
    if(thirdCallback(12))
    console.log("even");
    else
    console.log("odd");
}
function power(a,b)
{
    let p=1;
    while(b>0)
    {
        p=p*a;
        b--;
    }
    console.log("power "+p);
}
function divide(a,b)
{
    let ans=a/b;
    console.log("divide "+ans);
}
function evenOdd(a)
{
    if(a%2==0)
    return true;
    else
    return false;
}
multipleCallback(power,divide,evenOdd);
