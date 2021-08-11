// class 생성
class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Person("Hinyc");

console.log(p1);
// => Person { name : 'Hinyc' }
