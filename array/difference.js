function difference(arr1, arr2) {
  const sortArr1 = arr1.sort();
  const sortArr2 = arr2.sort();

  const data1 = [];
  for (let i = 0; i < sortArr1.length; i++) {
    if (!sortArr2.includes(sortArr1[i])) {
      data1.push(sortArr1[i]);
    }
  }
  for (let i = 0; i < sortArr2.length; i++) {
    if (!sortArr1.includes(sortArr2[i])) {
      data1.push(sortArr2[i]);
    }
  }

  return data1;
}

console.log(difference([1, 2], [1, 2, 3]));
