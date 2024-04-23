
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
    'apple', 'mango', 'peach', 'grape', 'lemon', 'berry', 'onion', 'olive', 'carrot', 'celery', 'radish', 'cherry', 'melon', 'potato',
    'tomato', 'garlic', 'ginger', 'kiwi', 'peachy', 'banana', 'cherry', 'walnut', 'hazelnut', 'orange', 'papaya', 'pumpkin', 'almond',
    'raisin', 'blueberry', 'strawberry', 'pineapple', 'cantaloupe', 'watermelon', 'cucumber', 'lettuce', 'spinach', 'broccoli', 'cauliflower',
    'asparagus', 'eggplant', 'zucchini', 'pepper', 'turnip', 'cabbage', 'mushroom', 'raspberry', 'blackberry', 'cranberry', 'coconut', 'apricot',
    'nectarine', 'plum', 'fig', 'date', 'tangerine', 'grapefruit', 'lime', 'peanut', 'cashew', 'pecan', 'chestnut', 'pistachio', 'macadamia', 'sultana',
    'currant', 'gooseberry', 'elderberry', 'boysenberry', 'rhubarb', 'kiwifruit', 'passionfruit', 'guava', 'mango', 'lychee', 'dragonfruit', 'pomegranate',
    'persimmon', 'quince', 'avocado', 'jackfruit', 'durian', 'cantaloupe', 'honeydew', 'melon', 'huckleberry', 'cloudberry', 'lingonberry', 'mulberry',
    'loganberry', 'strawberry', 'starfruit', 'rambutan', 'mangosteen', 'bilberry', 'blackcurrant', 'boysenberry', 'cherimoya', 'carambola', 'clementine',
    'feijoa', 'guava', 'kumquat', 'longan', 'mamey', 'mangaba', 'miracle', 'fruit', 'nectarines', 'olallieberry', 'passion', 'fruit', 'pepino', 'pitaya',
    'plumcot', 'prickly', 'pear', 'salmonberry', 'soursop', 'surinam', 'cherry', 'tamarillo', 'ugli', 'fruit', 'white', 'sapote', 'yellow', 'sapote', 'goji',
    'berry', 'cassis', 'cherries', 'pawpaw', 'feijoa', 'calamansi', 'tamarind', 'tayberry', 'bergamot', 'cherries', 'clementines', 'dewberries', 'fruit', 'mix',
    'gooseberries', 'honeyberries', 'kiwi', 'berries', 'nectarines', 'persimmons', 'pomegranates', 'prunes', 'quinces', 'satsumas', 'sloes', 'surinam', 'cherries',
    'watermelon', 'balls', 'mangosteens', 'pineberries', 'raspberries', 'strawberries', 'tangelos', 'watermelon', 'cubes', 'blood', 'oranges', 'boysenberries',
    'cantaloupes', 'coconuts', 'fruit', 'balls', 'honeydews', 'lychees', 'mameys', 'oranges', 'peaches', 'pluots', 'rambutans', 'tomatoes', 'bunch', 'lettuce', 'head',
    'spinach', 'bunch', 'broccoli', 'bunch', 'cauliflower', 'head', 'eggplant', 'head', 'zucchini', 'bunch', 'turnips', 'head', 'cabbage', 'head', 'mushrooms', 'basket',
    'raspberries', 'basket', 'blackberries', 'basket', 'strawberries', 'bucket', 'blueberries', 'bowl', 'cranberries', 'gooseberries', 'grapes',
    'package', 'raisins', 'dates', 'apricots', 'carton', 'nectarines', 'crate', 'plums', 'pouch', 'figs', 'tangerines', 'barrel', 'grapefruits',
    'bushel', 'limes', 'crate', 'peanuts', 'cashews', 'coconut', 'jar', 'hazelnuts', 'pecans', 'chestnuts', 'pistachios',
    'macadamias', 'pail', 'sultanas', 'packet', 'currants', 'elderberries', 'crate', 'boysenberries', 'rhubarbs', 'kiwifruits',
    'passionfruits', 'guavas', 'mangos', 'crate', 'lychees', 'dragonfruits', 'pomegranates', 'persimmons', 'quinces',
    'avocados', 'crate', 'jackfruits', 'durians', 'carton', 'cantaloupes', 'honeydews', 'huckleberries', 'cloudberrries',
    'lingonberries', 'mulberries', 'loganberries', 'crate', 'strawberries', 'starfruits', 'rambutans', 'mangosteens',
    'bilberries', 'blackcurrants', 'boysenberries', 'cherimoyas', 'carton', 'carambolas', 'clementines', 'feijoas',
    'crate', 'guavas', 'kumquats', 'longans', 'mameys', 'mangabas', 'miracle', 'fruit', 'crate', 'nectarines', 'olallieberries',
    'passion', 'fruits', 'pepinos', 'pitayas', 'plumcots', 'prickly', 'pears', 'crate', 'salmonberries', 'soursops',
    'surinam', 'cherries', 'tamarillos', 'ugli', 'fruits', 'white', 'sapotes', 'yellow', 'sapotes', 'goji', 'berries',
    'cassis', 'cherries', 'crate', 'pawpaws', 'feijoas', 'calamansis', 'tamarinds', 'tayberries', 'bergamots', 'crate',
    'cherries', 'clementines', 'dewberries', 'fruit', 'mix', 'gooseberries', 'can', 'honeyberries', 'bag', 'kiwi', 'berries', 'nectarines',
    'persimmons', 'pomegranates', 'prunes', 'bag', 'quinces', 'crate', 'satsumas', 'sloes', 'surinam', 'cherries', 'watermelon', 'balls', 'bag',
    'mangosteens', 'pineberries', 'raspberries', 'strawberries', 'bag', 'tangelos', 'watermelon', 'cubes', 'crate', 'blood', 'oranges', 'boysenberries',
    'cantaloupes', 'coconuts', 'bag', 'fruit', 'balls', 'crate', 'honeydews', 'lychees', 'mameys', 'oranges', 'bag', 'peaches', 'crate', 'pluots',
    'rambutans', 'tomatoes', 'bunch', 'lettuce', 'head', 'spinach', 'bunch', 'broccoli', 'bunch', 'cauliflower', 'head', 'eggplant',
    'head', 'zucchini', 'bunch', 'turnips', 'head', 'cabbage', 'head', 'mushrooms', 'basket', 'raspberries', 'basket', 'blackberries',
    'basket', 'strawberries', 'bucket', 'blueberries', 'bowl', 'cranberries', 'gooseberries', 'grapes', 'sack', 'package', 'raisins',
    'dates', 'bag', 'apricots', 'box', 'carton', 'nectarines', 'crate', 'plums', 'box', 'pouch', 'figs', 'tangerines', 'box', 'barrel',
    'grapefruits', 'bushel', 'limes', 'box', 'crate', 'peanuts', 'bag', 'cashews', 'box', 'can', 'coconut', 'jar', 'hazelnuts', 'box', 'pecans',
    'sack', 'chestnuts', 'box', 'container', 'pistachios', 'sack', 'bag', 'macadamias', 'box', 'pail', 'sultanas', 'container', 'packet', 'currants', 'box', 'bag', 'elderberries', 'container', 'crate',
    'boysenberries', 'box', 'container', 'rhubarbs', 'sack', 'kiwifruits', 'box', 'bag', 'passionfruits', 'container', 'crate', 'guavas', 'box', 'container', 'mangos', 'sack', 'pack', 'lychees',
    'box', 'pack', 'dragonfruits', 'container', 'box', 'pomegranates', 'sack', 'bag', 'persimmons', 'container', 'can', 'avocados', 'box', 'crate', 'jackfruits', 'container', 'durians',
    'carton', 'cantaloupes', 'container', 'honeydews', 'pack', 'huckleberries', 'container', 'cloudberrries', 'lingonberries', 'container', 'crate', 'mulberries',
    'loganberries', 'container', 'crate', 'strawberries', 'starfruits', 'container', 'rambutans', 'mangosteens', 'container', 'bilberries',
    'blackcurrants', 'container', 'boysenberries', 'cherimoyas', 'carambolas', 'clementines', 'feijoas',
    'crate', 'guavas', 'kumquats', 'longans', 'mameys', 'mangabas', 'miracle', 'fruit', 'crate',
    'nectarines', 'olallieberries', 'passion', 'fruits', 'pepinos', 'pitayas', 'plumcots', 'prickly',
    'pears', 'salmonberries', 'soursops', 'surinam', 'cherries', 'tamarillos', 'ugli', 'fruits',
    'white', 'sapotes', 'yellow', 'sapotes', 'goji', 'berries', 'cassis', 'cherries', 'pawpaws',
    'feijoas', 'calamansis', 'tamarinds', 'tayberries', 'bergamots', 'cherries', 'clementines'
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
