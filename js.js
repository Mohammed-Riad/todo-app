
debugger
let name;
name=prompt("what your name")
let gender = prompt("what your gender");
if(gender == "fmale")
{
    age()

}
else if(gender =="male")
{
    age()

}else
{
    alert("")
}

let welcome =confirm("Do you want to skip the welcome");

if(!(welcome))
{
    if(gender=="fmale")
    {
        alert("Hello"+" "+"ms"+ " " +name)
    }else if(gender == "male")
    {
        alert("Hello"+" "+"mr"+ " " +name)
    }
}
function age()
{
    let age=prompt("what your age");
    if(age <= 0)
    {
     alert("hamodeh")
    }
}
