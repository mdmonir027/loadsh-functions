function concat(...rest) {
  console.log(rest.flat());
}

var array = [1];
const other = concat(array, 2, [3], [[4]]);
