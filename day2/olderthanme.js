function person(name,age) {

		this.name = name;
		this.age = age;

	this.compareAge=function(other){
		if(this.age>other.age)
        {
            return `${other.name} "is older than"`
        }
        else if(this.age<other.age)
            {
                return `${other.name} "is younger than"`
            }
        else if(this.age==other.age)
            {
                 return `${other.name} "is same age as me"`
            }
        }
	
}
let p1=new person("priya",20);
let p2=new person("riya",22);
let p3=new person("kaviya",24);
console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3))