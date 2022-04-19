function calculator(a,b)
{
    let ans=a+b;
    function add()
    {
        console.log(ans);
    }
    add();
}
calculator(10,20);

//eg2
let counter=0;
function increment()
{
counter++;
}
increment();
increment();
increment();
console.log(counter);

//eg3
let count=0;
function increase()
{
    let count=0;
count++;
}
increase();
increase();
increase();
console.log(count);
