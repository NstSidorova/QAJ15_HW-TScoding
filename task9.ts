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
  const hasExpectedLength = pass.length >= passwordLengthMin || pass.length <= passwordLengthMax;
  const hasUpperCase = /[A-Z]/.test(pass);
  const hasDigits = /[0-9]/.test(pass);
  const hasOnlyLatin = /[a-z]/i.test(pass);
  const hasSpecialChars = /[\^!@_$&\*()\-\+]/.test(pass);
  return hasExpectedLength && hasUpperCase && hasDigits && hasOnlyLatin && hasSpecialChars;
}
console.log(checkPassword('fFffffffdd1-'));

function checkDigits(password: string) {
  const isValid = checkPassword(password);
  // const digits = password.match(/[0-9]/g)?.map(el => Number(el));
  const digits = password.match(/[0-9]/g)?.map(Number) ?? [];
  if (digits?.length) {
    return { isValid, digits };
  }
  return { isValid};
}
console.log(checkDigits('ff77fggHHy*12'));
