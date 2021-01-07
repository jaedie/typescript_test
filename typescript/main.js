"use strict";
exports.__esModule = true;
var message = "Hello James, Welcome Back";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 99999992.222222;
var name = 'James';
var sentence = "My name is " + name + ".\nI am a beginner in Typescript.";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['christ', 1];
var Color;
(function (Color) {
    Color[Color["x"] = 0] = "x";
    Color[Color["y"] = 1] = "y";
    Color[Color["z"] = 2] = "z";
})(Color || (Color = {}));
;
var c = Color.x;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'James';
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
