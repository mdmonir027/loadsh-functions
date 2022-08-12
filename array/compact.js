const compact = (data) => {
  const dataArray = [...data];
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (!dataArray[j]) {
        [dataArray[j], dataArray[j + 1]] = [dataArray[j + 1], dataArray[j]];
      }
    }
    if (!dataArray[i]) {
      count++;
    }
  }

  dataArray.length = data.length - count;
  return dataArray;
};

console.log(compact([0, 1, false, 2, "", 3]));
