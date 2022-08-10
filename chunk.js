console.time("time");
const chunk = (arr, nu) => {
  const newArray = [];
  for (let i = 0; i < arr.length / nu; i++) {
    newArray.push(arr.slice(nu * i, nu * i + nu));
  }
  return newArray;
};

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(chunk(a, 6));

console.timeEnd("time");
