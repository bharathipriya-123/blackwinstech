
//example  shiftToRight(80, 3) ➞ 10
//shiftToRight(-24, 2) ➞ -6
//80 >> 3 = floor(80/2^3) = floor(80/8) = 10

function rightshiftfunc(a,b)
{
    //  let result=Math.floor(a/(2^b));
     let c=a>>b;
    // let div=(2^b);
    // let result=(a/div);
    //  return result;
    return c;
   

}
console.log(rightshiftfunc(80,3));
console.log(rightshiftfunc(-24,2));
