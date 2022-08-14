
// debugger
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
     
    }
}





    let arr=[];
    let answer =prompt("are you an otaku")
    if(answer=="yes" || answer=="y" || answer=="no" ||answer=="n")
    {
       arr.push(answer)


       let answer1=prompt("Is your favorite anime One Piece?")
       if(answer1=="yes" || answer1=="y" || answer1=="no" ||answer1=="n")
       {
        arr.push(answer1)



        let answer2=prompt("I watch anime for 3 hours, are you like me?")
        if(answer2=="yes" || answer2=="y" || answer2=="no" ||answer2=="n")
        {
            arr.push(answer2)
        }else
        {
            arr.push("invaild")
        }



       }else
       {
        arr.push("invaild")
        let answer2=prompt("I watch anime for 3 hours, are you like me?")
        if(answer2=="yes" || answer2=="y" || answer2=="no" ||answer2=="n")
        {
            arr.push(answer2)
        }else
        {
            arr.push("invaild")
        }

       }

        


       
    }
    else{
        arr.push("invaild")
        let answer1=prompt("Is your favorite anime One Piece?")
        if(answer1=="yes" || answer1=="y" || answer1=="no" ||answer1=="n")
        {
         arr.push(answer1)
         let answer2=prompt("I watch anime for 3 hours, are you like me?")
         if(answer2=="yes" || answer2=="y" || answer2=="no" ||answer2=="n")
         {
            arr.push(answer2)
         }else
         {
            arr.push("invaild")
         }
 
        }else
        {
         arr.push("invaild")
         let answer2=prompt("I watch anime for 3 hours, are you like me?")
         if(answer2=="yes" || answer2=="y" || answer2=="no" ||answer2=="n")
         {
            arr.push(answer2)
         }else
         {
            arr.push("invaild")
         }
 
        }
        
        
    }
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i])
    }


let star =prompt("how many star do you rate")
if(star < 5)
{
    alert("why"+" "+"5")
}else if(star >= 5)
{
alert("thxx for rate "+" "+star)
}