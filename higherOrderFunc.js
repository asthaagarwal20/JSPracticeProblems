function print(name)
{
    const display=(task)=>{
        console.log(name+" is working on "+task);
    }
    return display;
}
print("Astha")("Nodejs");