console.time("time");
const chunk = (arr, nu) => {
  const newArray = [];
  for (let i = 0; i < arr.length / nu; i++) {
    const data = [];
    for (let j = nu * i; j < nu * i + nu - 1; j++) {
      if (arr[j]) {
        data.push(arr[j]);
      }
    }
  }
  return newArray;
};

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(chunk(a, 6));

console.timeEnd("time");
