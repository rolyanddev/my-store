const username: string = 'PedroVega';
const suma = (a: number, b: number): number => {
  return a + b;
};

suma(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const pedro = new Person(23, 'vega');
pedro.age;
