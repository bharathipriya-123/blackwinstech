function integercount(num)
{
    let count=0;
    while(num>0)
    {
        num=num/10;
        count++;
        
    }
    return count;
}
console.log(integercount(12345));