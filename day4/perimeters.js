// function perimetersquare(sides)
// {
//     // function perimetercircle(radius)
//     // {
//     //     return 6.28*radius;
//     // }
//     // return 4*sides;
// }

// const circle=perimetercircle(5);
// console.log(perimetercircle(5));
// const square =perimetersquare(2);
// console.log(perimetersquare(2));

function perimeters(str,num)
{
    return (str==="s")* (4*num) + (str==="c")* (6.28*num);
}
console.log(perimeters("c",4));

