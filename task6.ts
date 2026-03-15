// 6. Создайте функцию, которая будет принимать в себя массив значений и возвращать только те, в которых заданное(второй параметр, по умолчанию - 4) количество букв

function returnWords(words: string[], wordSize = 4) {
  // const result = [];
  const regular = /[а-яёa-z]/gi;

  // for (let i = 0; i < words.length; i++) {
  //   if (words[i].match(regular)?.length === wordSize) {
  //     result.push(words[i]);
  //   }
  // }
  // return result;
  return words.filter(word => word.match(regular)?.length === wordSize);
}
console.log(returnWords(['вилка', 'ложка', 'стол', 'cook', '0123', '1stop']));
// const regular = /^[а-яёА-ЯЁa-zA-Z]+$/;
// const letters = 'hello world';
// console.log(letters.match(regular));
// const obj = {
//   name: {
//     firstName: 'test'
//   }
// };
// console.log(obj.name.firstName);
