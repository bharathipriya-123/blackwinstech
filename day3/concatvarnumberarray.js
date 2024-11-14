function concatIntoArray(...args)
{
    return[].concat(...args);
}
const res=concatIntoArray([1,2],[3],[4],[5]);
console.log(res);