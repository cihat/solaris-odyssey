
// level 1: 3-4 letter words (easy)
// level 2: 5-6 letter words (medium)
// level 3: 7+ letter words (hard)
const words = {
  1: [
    'cat',
    'dog',
    'bat',
    'rat',
    'hat',
    'mat',
    'sat',
    'fat',
    'pat',
    'vat',
    'rat',
    'bat',
    'pen',
    'hen',
    'ten',
    'den',
  ],
  2: [
    'apple',
    'banana',
    'orange',
    'grapes',
    'mango',
    'melon',
    'peach',
    'pear',
    'plum',
    'kiwi',
    'guava',
    'papaya',
  ],
  3: [
    'elephant',
    'giraffe',
    'rhinoceros',
    'hippopotamus',
    'crocodile',
    'alligator',
    'kangaroo',
    'koala',
    'penguin',
    'ostrich',
    'flamingo',
    'peacock',
  ],
}

export default ({ count = 10, level = 2 }) => {
  const result = new Set()

  while (result.size < count) {
    const len = words[level].length
    result.add(words[level][Math.floor(Math.random() * len)])
  }
  return Array.from(result)
}

export const getWord = ({ level }) => {
  const index = Math.floor(Math.random() * words[level].length);
  const selectedWord = words[level][index];

  words[level].splice(index, 1);

  return selectedWord;
};
