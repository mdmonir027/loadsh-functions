function fill(array, replacer, startIndex, endIndex) {
  for (let i = 0; i < array.length; i++) {
    if (startIndex && !endIndex) {
      if (i >= startIndex) {
        array[i] = replacer;
      }
    } else if (startIndex && endIndex) {
      if (i >= startIndex && i < endIndex) {
        array[i] = replacer;
      }
    } else {
      array[i] = replacer;
    }
  }
  return array;
}

var array = [1, 2, 3];

fill(array, "a");
console.log(array);
// => ['a', 'a', 'a']

console.log(fill(Array(3), 2));
// => [2, 2, 2]

console.log(fill([4, 6, 8, 10, 1, 4], "*", 1, 3));
// => [4, '*', '*', 10]
