import { calc } from '../../task5';

describe('Сложение', () => {
  test('Сложение двух положительных целых чисел', () => {
    const result = calc.add(3, 2);
    expect(result).toEqual(5);
  });
  test('Сложение двух отрицательных нецелых чисел', () => {
    const result = calc.add(-3.2, -2.3);
    expect(result).toEqual(-5.5);
  });
  test('Сложение более двух чисел', () => {
    const result = calc.add(-3, 2, 5, 0);
    expect(result).toEqual(4);
  });
  test('Не указаны входные значения', () => {
    const result = calc.add();
    expect(result).toEqual(0);
  });
  describe('Деление', () => {
    test('Произведение двух положительных целых чисел', () => {
      const result = calc.divide(6, 2);
      expect(result).toEqual(3);
    });
    test('Произведение двух отрицательных нецелых чисел', () => {
      const result = calc.divide(-9.6, -3.2);
      expect(result).toEqual(3);
    });
    test('Деление на 0', () => {
      expect(() => calc.divide(3, 0)).toThrow('Ошибка: деление на ноль');
    });
  });
});
