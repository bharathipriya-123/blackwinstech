function countTrue(arr)
{
    let count=0;
    for(let i=0;i< arr.length;i++)
    {
        if(arr[i]==false)
        {
            count++;
        }

    }
    return count;
}
console.log(countTrue([true,false,true,true,false,false,true,false]));













































// function countTrue(arr)
// {
//     let count=0;
//     for(let i=0;i< arr.length;i++)
//     {
//         if(arr[i])
//         {
//             count++;
//         }
        
//     }
//     return count;
// }
// console.log(countTrue([false,false,false,true,false,true,true]));