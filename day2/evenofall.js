function evenOfAll(arr)
{
    const evenNumber=[];
    for(let i=0;i < arr.length;i++)
    {
        if(arr[i] % 2 === 0)
        {
            evenNumber.push(arr[i]);
        }
    }
    return evenNumber;
}
console.log(evenOfAll([1,2,3,4,5,6,8,10]));






















