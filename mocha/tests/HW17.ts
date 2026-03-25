// import { rollDice } from '../../task1.js';
// import { expect } from 'chai';

// describe('test Cube', () => {
//   it('min input value', () => {
//     const roll = rollDice(3);
//     if (!(roll === 1 || roll === 2)) {
//       throw Error(`Invalid value: received ${roll}`);
//     }
//   });
//   it('max input value', () => {
//     const roll = rollDice(100);
//     expect(roll).to.be.within(1, 100, 'бросок кубика должен быть в диапазоне от 1 до 100');
//   });
//   describe('invalid value', () => {
//     it('invalid input value', () => {
//       expect([1, 2, 3]).to.deep.equal([3, 2, 1]);
//     });
//   });
// });

import { calc } from '../../task5';
import { expect } from 'chai';

describe('Сложение', () => {
  let testNumber = 0;
  beforeEach(() => {
    testNumber++;
    console.log(`Это тест номер ${testNumber}`);
  });
  after(() => {
    console.log(`Итого тестов: ${testNumber}`);
  });
  it('Сложение двух положительных целых чисел', () => {
    const result = calc.add(3, 2);
    expect(result).to.equal(5);
  });
  it('Сложение двух отрицательных нецелых чисел', () => {
    const result = calc.add(-3.2, -2.3);
    expect(result).to.equal(-5.5);
  });
  it('Сложение более двух чисел', () => {
    const result = calc.add(-3, 2, 5, 0);
    expect(result).to.equal(4);
  });
  it('Не указаны входные значения', () => {
    const result = calc.add();
    expect(result).to.equal(0);
  });
  describe('Деление', () => {
    it('Произведение двух положительных целых чисел', () => {
      const result = calc.divide(6, 2);
      expect(result).to.equal(3);
    });
    it('Произведение двух отрицательных нецелых чисел', () => {
      const result = calc.divide(-9.6, -3.2);
      expect(result).to.equal(3);
    });
    it('Деление на 0', () => {
      expect(() => calc.divide(3, 0)).to.throw(Error, 'Ошибка: деление на ноль');
    });
  });
});
