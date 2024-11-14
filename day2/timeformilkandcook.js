function ischristmasEve(date)
{
    return date.getMonth()===11 && date.getDate()===24;
}
const christmasEve=new Date('2024-11-25');
const christmasEve1=new Date('2023-12-24');
console.log(ischristmasEve(christmasEve));