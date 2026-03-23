// 5. Реализовать класс калькулятор, с минимум следующими методами: сложение, вычитание, умножение, деление. Эта задача нам пригодится впоследствии

class Calculator {
  add(...a: number[]) {
    return a.reduce((acc, value) => acc + value, 0);
  }
  multiply(...a: number[]) {
    const def = a.length === 0 ? 0 : 1;
    return a.reduce((acc, value) => acc * value, def);
  }
  divide(a: number, b: number) {
    if (b === 0) {
      throw Error('Ошибка: деление на ноль');
    }
    return a / b;
  }
  subtract(a: number, b: number) {
    return a - b;
  }
}
export const calc = new Calculator();
// console.log(calc.add(10));
// console.log(calc.multiply(2));
// console.log(calc.divide(2,0));
// console.log(calc.subtract(2, 4));

// const arr = [1, 4, 76, 111];
// const [numb1, numb2] = arr
// console.log(numb1, numb2)
