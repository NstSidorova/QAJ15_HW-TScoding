// 3. Создать функцию которая будет принимать входящее значение и добавлять к нему слово "супер"

function addWord(word = 'котик') {
  const containsCyrillic = /^[а-яёА-ЯЁ]+$/;
  const containsLatin = /^[a-zA-Z]+$/;
  const conditionOne = containsCyrillic.test(word)
  const conditionTwo = containsLatin.test(word)
  if (!conditionOne && !conditionTwo) {
    throw new Error('Строка должна содержать только кириллицу или только латиницу.');
  }
  if (containsCyrillic.test(word)) {
    return 'супер' + word;
  }
  if (containsLatin.test(word)) {
    return 'super' + word;
  }
}
// console.log(addWord("12"));
console.log(addWord("собака"));
console.log(addWord("dog"));
console.log(addWord("dogсобака"));
console.log(addWord("():)"));