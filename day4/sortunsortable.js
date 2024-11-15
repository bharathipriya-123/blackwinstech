
function sortunsortable(arr)
{
    return arr.sort((a,b) => 
    {
       if(typeof a === 'number' && typeof b=== 'number' )
       {
        return a-b;
       }
    })

}
console.log(sortunsortable([[1,2,3],[2],[5] ,4]));