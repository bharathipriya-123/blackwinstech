function addFunct(a)
{
    return function(b)
    {
        return a+b;
    }
}
console.log(addFunct(5)(3));
console.log(addFunct(10)(30));