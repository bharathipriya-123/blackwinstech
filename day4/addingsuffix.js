// function addsuffixes(word,suffix)
// {
//     return word+suffix;
// }
//  console.log(addsuffixes("fear","less"));


function addsuffixes(suffix)
{
    return function(word)
    {
        return word+suffix
    }
}

const add_less=addsuffixes("less");
console.log(add_less("fear"));

const add_ly=addsuffixes("ly");
console.log(add_ly("totally"));