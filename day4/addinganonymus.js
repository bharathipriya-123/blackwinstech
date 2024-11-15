function adding(num1)
{
    return function(num2)
    {
        return num1+num2;
    }
}
const addingnumber=adding(1);
console.log(addingnumber(3));

const addingten=adding(10);
console.log(addingten(5))

