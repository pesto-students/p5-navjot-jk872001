class Person{
    constructor(subject)
    {
        this.subject=subject;
        this.teacher="Navjot";
    }
   
}
class Teacher extends Person {
    constructor(subject)
    {
        super(subject)
       
        // return {}  //overiding
    }
    printSubject(){
        console.log(this.teacher+" teaches us "+this.subject);
    }
}

const e = new Teacher("JavaScript");
// console.log(e);
e.printSubject();
// e.printId();