 add1 = (num1,num2) =>
{
    
    if(num1 && num2 < 0)
    {
        console.log("Enter a positive number !! dude");
    }
    else{
        console.log("Addition  of two numbers :" , num1 + num2);
    }
    
}
console.log(add1(5,100));
