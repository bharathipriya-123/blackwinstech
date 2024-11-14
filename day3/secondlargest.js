function secondLargest(arr)
{
    arr.sort((a,b)=>b-a);
    return arr[1];
}
const numbers=[1,2,3,4,5,6,7];
console.log(secondLargest(numbers));