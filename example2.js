"use strict";
// constructor & initialize
class Person2 {
    constructor(age) {
        this.name = "Hinyc";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
//defalut 생성자, 인자없이실행되는 constructor 함수 의미.
// const p2 = new Person("Hinyc");
// console.log(p2);
// => Person { name : 'Hinyc' }
const p21 = new Person2();
const p22 = new Person2(31);
console.log(p21);
// => Person2 { name: 'Hinyc', age: 20}
console.log(p22);
// => Person2 { name: 'Hinyc', age: 31}
