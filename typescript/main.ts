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









