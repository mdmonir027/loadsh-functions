console.time("time");
const chunk = (arr, nu) => {
  const data = [];
  for (let i = 0; i < arr.length / nu; i++) {
    let c = 0;
    for (let j = nu * i; j < nu * i + nu - 1; j++) {
      if (arr[j]) {
        if (!data[i]) data[i] = [];
        data[i][c] = arr[j];
        c++;
      }
    }
  }

  return data;
};
console.timeEnd("time");

const a = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11];

console.log(chunk(a, 6));
