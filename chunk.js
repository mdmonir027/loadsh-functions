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

const a = Array.from(new Array(1000000000)).map((_, i) => i + 1);

chunk(a, 6);
