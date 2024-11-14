// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter

function generation(x,y)
{
   if(x==-3 && y=="f")
   {
    console.log("great grandmother");
   }
   else if(x==-3 && y=="m")
   {
    console.log("great grandfather");
   }
   else if(x==-2 && y=="f")
   {
    console.log(" grandmother");
   }
   else if(x==-2&& y=="m")
   {
     console.log(" grandfather");
   }
    else if(x==-1 && y=="f")
    {
     console.log(" mother");
    }
    else if(x==-1 && y=="m")
    {
     console.log(" father");
    }
    else if(x==0 && (y=="f"||"m"))
    {
      console.log(" me");
    }
    else if(x==1 && y=="f")
    {
     console.log("daughter");
    }
    else if(x==1 && y=="m")
    {
         console.log("son");
     }
    else if(x==2 && y=="f")
    {
       console.log(" grand daughter");
    }
    else if(x==2 && y=="m")
    {
         console.log(" grand son");
     }
     else if(x==3 && y=="f")
     {
         console.log("  great grand daughter");
     }
    else if (x==3 && y=="m")
    {
      console.log(" great grand son");
    }
}
console.log(generation(2,"f"));
console.log (generation(-3, "m")) //➞ "great grandfather"

console.log(generation(1, "f")) //➞ "daughter"