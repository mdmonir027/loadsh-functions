function difference(arr1, arr2) {
  const sortArr1 = arr1.sort();
  const sortArr2 = arr2.sort();

  const data1 = [];
  sortArr1.forEach((item) => {
    if (!sortArr2.includes(item)) {
      data1.push(item);
    }
  });
  sortArr2.forEach((item) => {
    if (!sortArr1.includes(item)) {
      data1.push(item);
    }
  });

  return data1;
}

console.log(difference([1, 2], [1, 2, 3]));
