// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ ""



function redundantfunc(str)
{
    return function()
    {
        return str;
    }
    
}
const f1=redundantfunc("apple");
const f2=redundantfunc("pear");
const f3=redundantfunc(`""`);
console.log(f1());
console.log(f2());
console.log(f3());
