export {};
let message = "Hello James, Welcome Back";
console.log(message);

let x: number = 10;
const y: number = 20;

let sum: number;
const title: string = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 99999992.222222;
let name: string = 'James';
let sentence: string = `My name is ${name}.
I am a beginner in Typescript.`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;
let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['christ', 1];

enum Color {x, y, z};

let c: Color = Color.x;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'James';

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string} {
    return !!obj && typeof obj === "object" && "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

let a: number | boolean;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

function add(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName (person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
};

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne',
};

fullName(p);

class Employee {
    protected employeeName: string;
    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee(`Vishwas`);
let emp2 = new Employee(`James`);
console.log(emp1.employeeName);
emp1.greet();
console.log(emp2.employeeName);
emp2.greet();

// class wecode {
//     studentName: string;
//     constructor(name:string) {
//         this.studentName = name;
//     }

//     farewell() {
//         console.log(`Byebye ${this.studentName}`)
//     }
// }

// let stu1 = new wecode(`lol`);
// console.log(stu1.studentName);
// stu1.farewell();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager(`Bruce`);
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);


















