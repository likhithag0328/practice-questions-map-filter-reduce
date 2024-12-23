// sumOf([1, 2, 3, 4]) => 10
const sum = function (augend, addend) {
  return augend + addend;
};

const sumOf = function (numbers) {
  return numbers.reduce(sum, 0);
};

// productOf([1, 2, 3, 4]) => 24
const product = function (multiplier, multiplicand) {
  return multiplier * multiplicand;
};

const productOf = function (numbers) {
  return numbers.reduce(product, 1);
};

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  return numbers.reduce(sum, 0) / numbers.length;
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minimumOf = function ([smallest, secondSmallest], number) {
  if (number > secondSmallest) {
    return [smallest, secondSmallest];
  }

  return [Math.min(smallest, number), Math.max(smallest, number)];
};

const minOf = function (numbers) {
  return numbers.reduce(minimumOf, [Infinity, Infinity])[0];
};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maximumOf = function ([largest, secondLargest], number) {
  if (number < secondLargest) {
    return [largest, secondLargest];
  }

  return [Math.max(largest, number), Math.min(largest, number)];
};

const maxOf = function (numbers) {
  return numbers.reduce(maximumOf, [-Infinity, -Infinity])[0];
};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = function (number) {
  return number > 0;
};

const sumPositiveNumbers = function (numbers) {
  const positives = numbers.filter(isPositive);
  return positives.reduce(sum, 0);
};

// sumOfSquares([1, 2, 3, 4]) => 30
const square = function (number) {
  return number * number;
};

const sumOfSquares = function (numbers) {
  const squares = numbers.map(square);
  return squares.reduce(sum, 0);
};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = function (number) {
  return number & 1;
};

const sumOfOddNumbers = function (numbers) {
  const odds = numbers.filter(isOdd);
  return odds.reduce(sum, 0);
};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const invert = function (f) {
  return function (...args) {
    return !f(...args);
  };
};

const incrementIfNegative = function (count, number) {
  if (invert(isPositive)(number)) {
    return count + 1;
  }
  return count;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(incrementIfNegative, 0);
};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  const squares = numbers.filter(invert(isOdd)).map(square);
  return squares.reduce(sum, 0);
};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce(function (result, word) { return result.concat(word); }, '');
};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longest = function ([longest, secondLongest], string) {
  if (string.length > secondLongest.length) {
    longest = longest.length > string.length ? longest : string;
    secondLongest = longest.length < string.length ? longest : string;
  }

  return [longest, secondLongest];
};

const longestWord = function (words) {
  return words.reduce(longest, ['', ''])[0];
};

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) { };

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWordsWith = function (char) {
  return function (result, word) {
    const separator = result === '' ? '' : char;
    return [result, word].join(separator);
  };
};

const joinWithComma = function (words) {
  return words.reduce(joinWordsWith(','), '');
};

// reverseWords(["hello", "world"]) => "world hello"
const joinReversedWordsWithSpace = function (result, word) {
  const separator = result === '' ? '' : ' ';
  return [word, result].join(separator);
};

const reverseWords = function (words) {
  return words.reduce(joinReversedWordsWithSpace, '');
};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce(joinWordsWith(' '), '');
};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce(joinWordsWith(''));
};

// countVowelsInWords(["hello", "world"]) => "eoo"
const isVowel = function (char) {
  const vowels = 'aeiou';
  return vowels.includes(char);
};

const addIfVowel = function (result, [...string]) {
  return result + string.filter(isVowel).join('');
};

const countVowelsInWords = function (words) {
  return words.reduce(addIfVowel, '');
};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const capitalizeFirstLetter = function (string) {
  return string[0].toUpperCase() + string.slice(1);
};

const createCamelCase = function (result, word) {
  const string = result === '' ? word : capitalizeFirstLetter(word);
  return [result, string].join('');
};

const makeCamelCase = function (words) {
  return words.reduce(createCamelCase, '');
};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseSingleString = function ([...string]) {
  return string.reverse().join('');
};

const reverse = function (result, string) {
  return [result, reverseSingleString(string)].join('');
};

const reverseString = function (words) {
  return words.reduce(reverse, '');
};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const repeat = function (result, number) {
  result.push(number, number);
  return result;
};
const duplicateNumbers = function (numbers) {
  return numbers.reduce(repeat, []);
};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) { };

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) { };

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) { };

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) { };

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) { };

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) { };

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) { };

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) { };

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) { };

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) { };

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { };

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { };

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) { };

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { };

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { };

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { };

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { };

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { };

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { };

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { };

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { };

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { };

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { };

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { };

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { };

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { };

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { };

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { };

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { };

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { };

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) { };

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) { };

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) { };

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { };

const test = function () {
  console.log(sumOf([1, 2, 3, 4]));
  console.log(productOf([1, 2, 3, 4]));
  console.log(averageOf([1, 2, 3, 4, 5]));
  console.log(minOf([3, 1, 4, 1, 5, 9, 2]));
  console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));
  console.log(sumPositiveNumbers([1, -2, 3, -4]));
  console.log(sumOfSquares([1, 2, 3, 4]));
  console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));
  console.log(countNegativeNumbers([1, -2, 3, -4]));
  console.log(findSumOfEvenSquares([1, 2, 3, 4]));
  console.log(concatenateWords(["hello", "world"]));
  console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));
  console.log(joinWithComma(["apple", "banana", "cherry"]));
  console.log(reverseWords(["hello", "world"]));
  console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));
  console.log(concatenateNames(["John", "Jane", "Doe"]));
  console.log(countVowelsInWords(["hello", "world"]));
  console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));
  console.log(reverseString(["apple", "banana", "cherry"]));
  console.log(duplicateNumbers([1, 2, 3]));
};

test();