function dropRight(arr, n = 1) {
  const data = [];

  for (let i = 0; i < arr.length; i++) {
    if (i + 1 <= arr.length - n) {
      data.push(arr[i]);
    }
  }

  return data;
}

console.log(dropRight([1, 2, 3, 4, 5, 6, 7]));
