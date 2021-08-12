// // access modifieres
// class Person3 {
//   name: string;
//   age: number;
//   private constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p32 = new Person3("apple", 31);
// // 'Person3' 클래스의 생성자는 private이며 클래스 선언 내에서만 액세스할 수 있습니다.ts(2673)

class Person3 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Person4 {
  constructor(public name: string, public age: number) {}
}

const p33 = new Person3("apple", 99);
console.log(p33);
// => Person3 { name: 'apple', age: 99 }

const p34 = new Person4("banana", 99);
console.log(p34);
// => Person3 { name: 'banana', age: 99 }
