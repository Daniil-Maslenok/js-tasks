// Задача 1
// Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.

const string = "Привет! Как дела?";

const vowels = ["А", "а", "О", "о", "У", "у", "Ы", "ы", "Э", "э", "Е", "е", "Ё", "ё", "И", "и", "Ю", "ю", "Я", "я"];

const getVowels = stringToFilt => {
  let extractedVowels = "";

  for (let i = 0; i < stringToFilt.length; i++) {
    const currentLetter = stringToFilt[i];

    if (vowels.includes(currentLetter)) {
      extractedVowels = extractedVowels + currentLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));
