function addName(obj,key,value)
{
    obj[key]=value;
}
    let data={};
    addName(data,"Brutus", 300);
    addName(data,"piano",500);
    addName(data,"stereo", 300);
    console.log(data);