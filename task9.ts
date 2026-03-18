// 0. У нас поменялись требования к паролю. Юзерам выслана ссылка на смену пароля. Теперь когда они зайдут к нам на сайт, мы должны проверить, что их новый пароль соответствует следующим требованиям:
//      - минимум 8 символов                            | латинские буквы, максимум 15
//      - минимум одна заглавная буква
//      - минимум одна цифра
//      - минимум один специальный символ из набора     | ^!@_$&*()-+
// а. Создайте функцию, которая будет принимать на вход строку (пароль) и возвращать true, если пароль соответствует требованиям и false, если не соответствует.
// б. Нашим аналитикам интересно, какие цифры чаще всего используются юзерами в паролях. модифицируйте функцию так, чтобы она вместо булевого значения возвращала объект по следующим примерам:
//   input: 'Password123!' -> output: { isValid: true, digits: [1, 2, 3] }
//   input: 'myC00!Pa55w0rd' -> output: { isValid: true, digits: [0, 0, 5, 5, 0] }

function checkPassword(pass: string) {
  const passwordLengthMin = 8;
  const passwordLengthMax = 15;
  if (
    pass.length < passwordLengthMin ||
    pass.length > passwordLengthMax ||
    !/[A-Z]/g.test(pass) ||
    !/[0-9]/g.test(pass) ||
    /[А-Яа-яЁё]/g.test(pass) ||
    !/[!^@_$&*()-+]/g.test(pass)
  ) {
    return false;
  }
  return true;
}
console.log(checkPassword('fFffffffdd1+'));

function checkDigits(password: string) {
  const isValid = checkPassword(password);
  const digits = password.match(/[0-9]/g);
  return { isValid, digits };
}
console.log(checkDigits('12GF22ggf+'));
