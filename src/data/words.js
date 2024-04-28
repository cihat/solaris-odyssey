
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
  "2-1": ['analysis', 'aspect', 'belief', 'budget', 'career', 'concept', 'contact', 'culture', 'design', 'detail', 'effort', 'example', 'expert', 'future', 'impact', 'income', 'method', 'moment', 'option', 'policy', 'profit', 'region', 'series', 'source', 'speech', 'theory', 'travel', 'version', 'vision', 'volume', 'weather', 'welfare', 'ability', 'access', 'action', 'agency', 'amount', 'answer', 'appeal', 'aspect', 'attack', 'author', 'budget', 'career', 'cause', 'client', 'choice', 'claim', 'class', 'color', 'comment', 'common', 'county', 'course', 'court', 'credit', 'crisis', 'debate', 'design', 'detail', 'device', 'doctor', 'dollar', 'effect', 'effort', 'energy', 'engine', 'expert', 'factor', 'family', 'famous', 'figure', 'flight', 'focus', 'future', 'guest', 'health', 'heart', 'image', 'impact', 'income', 'issue', 'judge', 'level', 'limit', 'major', 'method', 'moment', 'music', 'novel', 'object', 'office', 'option', 'order', 'paper', 'parent', 'party', 'patient', 'period', 'person', 'phone', 'place', 'policy', 'price', 'prison', 'profit', 'purpose', 'range', 'ratio', 'reason', 'record', 'region', 'relief', 'remote', 'report', 'resort', 'result', 'return', 'salary', 'school', 'series', 'source', 'speech', 'spirit', 'stable', 'status', 'stress', 'survey', 'target', 'theory', 'ticket', 'title', 'union', 'unique', 'vision', 'volume', 'wealth', 'weight', 'wonder', 'worker', 'world', 'answer', 'aspect', 'attack', 'author', 'budget', 'client', 'comment', 'credit', 'crisis', 'design', 'detail', 'doctor', 'energy', 'expert', 'family', 'figure', 'future', 'health', 'impact', 'income', 'issue', 'judge', 'method', 'moment', 'object', 'option', 'order', 'paper', 'patient', 'period', 'policy', 'prison', 'profit', 'record', 'region', 'relief', 'remote', 'result', 'return', 'school', 'source', 'speech', 'status', 'survey', 'target', 'ticket', 'union', 'wealth', 'weight', 'worker', 'world', 'abstract', 'analysis', 'associate', 'beautiful', 'challenge', 'community', 'contribute', 'customize', 'delicious', 'education', 'efficient', 'essential', 'evaluate', 'experience', 'important', 'innovate', 'knowledge', 'marketing', 'necessary', 'objective', 'potential', 'practical', 'procedure', 'productive', 'profession', 'reference', 'relevance', 'structure', 'technical', 'tradition', 'understand', 'alternative', 'apartment', 'application', 'background', 'conference', 'consistent', 'continuous', 'cooperation', 'department', 'difference', 'discussion', 'evaluation', 'experience', 'flexibility', 'generation', 'government', 'individual', 'investment', 'leadership', 'management', 'opportunity', 'organization', 'particular', 'performance', 'preference', 'preparation', 'production', 'profession', 'psychology', 'requirement', 'restaurant', 'technology', 'treatment', 'absolutely', 'acceptance', 'accessible', 'accordingly', 'accounting', 'activities', 'additional', 'adjustment', 'advertising', 'aggressive', 'allocation', 'analytical', 'apologies', 'apparently', 'appearance', 'appreciate', 'assessment', 'assignment', 'association', 'atmosphere', 'attachment', 'attendance', 'attention', 'attractive', 'authorized', 'background', 'beneficial', 'brilliant', 'calculator', 'capability', 'celebration', 'certainly', 'challenge', 'characteristic', 'comfortable', 'commission', 'communication', 'compelling', 'competence', 'compliance', 'components', 'conclusion', 'conditions', 'confidence', 'contribution', 'convenience', 'conversion', 'cooperation', 'coordinate', 'corporation', 'correspondence', 'counseling', 'creativity', 'customize', 'dedication', 'definition', 'department', 'deployment', 'description', 'development', 'difference', 'discipline', 'discussion', 'efficiency', 'electronic', 'employment', 'encouragement', 'engagement', 'enterprise', 'enthusiasm', 'environment', 'evaluation', 'eventually', 'everything', 'examination', 'exceptional', 'experience', 'explanation', 'expression', 'flexibility', 'foundation', 'generation', 'government', 'guaranteed', 'imagination', 'implementation', 'importance', 'impressive', 'incentives', 'influence', 'innovation', 'innovative', 'inspection', 'installation', 'instructions', 'integration', 'intelligent', 'interested', 'investment', 'leadership', 'literature', 'management', 'marketable', 'meaningful', 'measurement', 'membership', 'motivation', 'negotiation', 'necessarily', 'necessities', 'negotiation', 'objectives', 'observation', 'opportunity', 'optimistic', 'organization', 'particularly', 'performance', 'permission', 'perspective', 'possibility', 'preparation', 'presentation', 'presidential', 'productivity', 'professional', 'programming', 'promotional', 'psychology', 'publications', 'purchasing', 'receptionist', 'recognition', 'reputation', 'requirement', 'resolution', 'responsible', 'restaurant', 'satisfaction', 'scholarship', 'significant', 'solicitation', 'specialized', 'statistics', 'strategies', 'successful', 'suggestions', 'supportive', 'technology', 'traditional', 'transaction', 'understand', 'understanding', 'university', 'utilization', 'volunteering', 'welcome', 'willingness', 'wonderful', 'worrying', 'yesterday', 'acknowledge', 'acquisition', 'advertising', 'alternative', 'appropriate', 'arrangement', 'assistance', 'association', 'availability', 'background', 'beneficiary', 'billionaire', 'biotechnology', 'capability', 'certificate', 'championship', 'combination', 'commercial', 'commitment', 'comparable', 'competition', 'comprehensive', 'conference', 'confirmation', 'considerate', 'consistency', 'constantly', 'contribute', 'cooperation', 'cooperative', 'coordination', 'corporation', 'correspondence', 'customization', 'demonstrate', 'development', 'difference', 'disciplinary', 'discriminate', 'discussion', 'distinguished', 'distribution', 'economically', 'educational', 'effectiveness', 'efficiency', 'employment', 'encouragement', 'engineering', 'enterprise', 'environment', 'essentially', 'established', 'evaluation', 'everything', 'exclusively', 'experienced', 'explanation', 'facilitation', 'flexibility', 'forecasting', 'fundamental', 'government', 'highlighted', 'hospitality', 'immediately', 'implementation', 'importance', 'impressive', 'incorporate', 'independent', 'information', 'innovation', 'instruction', 'integration', 'intelligence', 'interesting', 'interference', 'interpretation', 'intervention', 'investment', 'legislation', 'legitimate', 'measurement', 'membership', 'negotiation', 'obligation', 'opportunity', 'organization', 'outstanding', 'participation', 'performance', 'permission', 'perspective', 'preparation', 'presentation', 'profession', 'professional', 'programming', 'psychological', 'publications', 'recognition', 'registration', 'regulation', 'reputation', 'requirement', 'resolution', 'restaurant', 'retirement', 'satisfaction', 'significant', 'specialized', 'specification', 'sponsorship', 'statistical', 'strategically', 'substantial', 'successful', 'sufficiently', 'supervision', 'supervisor', 'supportive', 'technological', 'traditional', 'transaction', 'understanding', 'university', 'utilization', 'volunteering', 'willingness', 'acknowledgment', 'administration', 'advertisement', 'alternatively', 'announcement', 'appreciation', 'arrangements', 'availability', 'beneficiaries', 'biotechnology', 'certification', 'collaboration', 'communication', 'compensation', 'comprehensive', 'concentration', 'consistently', 'construction', 'consultation', 'contribution', 'corresponding', 'demonstration', 'determination', 'distinguished', 'documentation', 'educational', 'effectiveness', 'entertainment', 'establishment', 'evaluation', 'examination', 'extraordinary', 'flexibility', 'fundamental', 'implementation', 'improvement', 'independence', 'individually', 'information', 'innovation', 'instruction', 'interaction', 'interpretation', 'intervention', 'introduction', 'investigation', 'legislation', 'manufacturing', 'measurement', 'membership', 'negotiation', 'organization', 'participation', 'performance', 'preparation', 'presentation', 'professional', 'programming', 'psychological', 'publications', 'recommendation', 'registration', 'regulations', 'rehabilitation', 'requirements', 'reservation', 'residential', 'responsible', 'restaurant', 'satisfaction', 'significant', 'specialization', 'statistical', 'strategically', 'strengthening', 'substantial', 'successfully', 'superintendent', 'supervision', 'supervisor', 'supportive', 'technological', 'unfortunately', 'acknowledgment', 'administration', 'advertisement', 'announcement', 'appreciation', 'arrangements', 'availability', 'beneficiaries', 'biotechnology', 'certification', 'collaboration', 'communication', 'compensation', 'comprehensive', 'concentration', 'consistently', 'construction', 'consultation', 'contribution', 'corresponding', 'demonstration', 'determination', 'distinguished', 'documentation', 'educational', 'effectiveness', 'entertainment', 'establishment', 'evaluation', 'examination', 'extraordinary', 'flexibility', 'fundamental', 'implementation', 'improvement', 'independence', 'individually', 'information', 'innovation', 'instruction', 'interaction', 'interpretation', 'intervention', 'introduction', 'investigation', 'legislation', 'manufacturing', 'measurement', 'membership', 'negotiation', 'organization', 'participation', 'performance', 'preparation', 'presentation', 'professional', 'programming', 'psychological', 'publications', 'recommendation', 'registration', 'regulations', 'rehabilitation', 'requirements', 'reservation', 'residential', 'responsible', 'restaurant', 'satisfaction', 'significant', 'specialization', 'statistical', 'strategically', 'strengthening', 'substantial', 'successfully', 'superintendent', 'supervision', 'supervisor', 'supportive', 'technological', 'unfortunately'],
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
    'avocados', 'crate', 'jackfruits', 'durians', 'carton', 'cantaloupes', 'honeydews', 'huckleberries', 'cloudberries',
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
    'carton', 'cantaloupes', 'container', 'honeydews', 'pack', 'huckleberries', 'container', 'cloudberries', 'lingonberries', 'container', 'crate', 'mulberries',
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
