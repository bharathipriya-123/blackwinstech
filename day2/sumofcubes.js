function sumOFCubes(arr)
{
    const result=[];
    let sum=0;
    for(let i=0;i< arr.length;i++)
    {
        sum=sum+Math.pow(arr[i],3)
        
    }
    return sum;
}
console.log(sumOfCubes([1,2,3]));