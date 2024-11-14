function plusvalue(num)
{
  return function(x)
  { 
   return num+x;
  }
}
//add plus five
const addnum=plusvalue(5);
//add plus ten
const addten=plusvalue(10);
console.log(addnum(3));
console.log(addten(5));
console.log(addten(15));

