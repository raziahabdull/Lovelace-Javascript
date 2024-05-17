class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

greet(){
    console.log(`hello, my name is ${this.name} and I am ${this.age} years old`);
}
};
const jane = new Person('Jane',30,'ola');
console.log({jane});
jane.greet();
console.log('prototype',Person.prototype)

Person.prototype.nationality = 'Kenyan';
console.log('nationality',jane.nationality);
console.log(jane.hello);

// Inheritence
class Student extends Person{
    constructor(name,age,school){
        super(name,age);
        this.school = school;
    }
    profession(){
        console.log(`I am a student at ${this.school}`);
    }
    
    
}

const amanda = new Student('Amanda',19);
console.log({amanda});
console.log(`nationality`,amanda.nationality);
amanda.greet();