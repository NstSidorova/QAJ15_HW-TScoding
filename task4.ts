// 3. Создать функцию которая будет принимать входящее значение и добавлять к нему слово "супер"

function addWord(word = 'котик') {
  const containsCyrillic = /^[а-яёА-ЯЁ]+$/;
  const containsLatin = /^[a-zA-Z]+$/;
  if (containsCyrillic.test(word)) {
    return 'супер' + word;
  }
  if (containsLatin.test(word)) {
    return 'super' + word;
  }
  if (!containsCyrillic.test(word) || !containsLatin.test(word)) {
    throw new Error('Строка должна содержать только кириллицу или только латиницу.');
  }
}
console.log(addWord('12'));
console.log(addWord('собака'));
