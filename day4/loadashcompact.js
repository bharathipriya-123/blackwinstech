function compact(arr)
{
   return arr.filter(Boolean);
  
}
console.log(compact([1,2,3,"",false]));

