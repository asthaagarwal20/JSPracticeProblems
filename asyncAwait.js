 //eg 1
 const getdata=async()=>{
     var a= await "Hello World";
     return a;
 }
 console.log(1);
 getdata().then(message=>console.log(message));
console.log(2);

//eg2
function f()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>resolve('done'),1000)
    });
}
async function fun()
{
const a=await f();
console.log(a);
}
fun();

//eg3
function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('the');
      }, 200);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 300);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 500);
    });
  }
  
  async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();
    console.log(a+" "+b+" "+c);
  }
  
  msg(); 