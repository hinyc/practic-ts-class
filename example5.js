"use strict";
// setter & getter, readonly
class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p5 = new Person5("Hinyc", 31); //p5: 타입 Person5는 쓰지 않아도 됨.
console.log(p5.name); // get, p5의 name의 값을 가져옴. get을 하는 함수 getter.
p5.name = "Hong"; // set, p5의 name의 값을 새로 지정함. set을 하는 함수 setter.
//getter 사용
class Person51 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    //get에서 name이라는 이름을 사용하면 constructor name과 충돌발생하여, _name으로 변경.
    get name() {
        console.log("get");
        // this._name을 return시키기전 console.log출력함, 이는 다른어떤 동작을 getter사용시 동작시킬수 있음을 의미함.
        return this._name; //this.name + "string" 의 형태도 가능.
    }
    set name(n) {
        console.log("set"); //get 과 마찬가지로 set할때마다 특정 동작을 실행 시킬수 있음. ex)count.
        this._name = n;
    }
}
const p51 = new Person51("Hincy", 31);
console.log(p51.name);
// => get
// => Hincy
p51.name = "Hong";
console.log(p51.name);
// => set
// => Hong
