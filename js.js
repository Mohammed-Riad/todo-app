

let name;
name=prompt("what your name")
let gender = prompt("what your gender");
if(gender == "fmale")
{
    let age=prompt("what your age");
   if(age <= 0)
   {
    alert("hamodeh")
   }

}
else if(gender =="male")
{
    let age=prompt("what your age");
    if(age <= 0)
    {
     alert("hamodeh")
    }

}else
{
    alert("")
}

let welcome =prompt("Do you want to skip the welcome");
if(welcome  == "yes")
{

}else if(welcome == "no")
{
    if(gender=="fmale")
    {
        alert("Hello"+" "+"ms"+ " " +name)
    }else if(gender == "male")
    {
        alert("Hello"+" "+"mr"+ " " +name)
    }
}