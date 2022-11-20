function fill(array, replacer, startIndex, endIndex) {
  const getReplacer = (i, start, end) => {
    if (!start) return replacer;
    if (end) return i >= start && i < end ? replacer : array[i];
    return i >= start ? replacer : array[i];
  };

  for (let i = 0; i < array.length; i++) {
    array[i] = getReplacer(i, startIndex, endIndex);
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
