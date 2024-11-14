function addAllNumber(start,end)
{
    let sum=0;
    for(let i=start;i<=end;i++)
    {
        sum=sum+i;
        
    }
    return sum;
}
console.log(addAllNumber(1,10));