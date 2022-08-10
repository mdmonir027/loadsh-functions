const chunk = (arr = [], nu = 1) => {
  const cloneArray = [...arr];
  const loopCount = Math.ceil(cloneArray.length / nu);
  const newArray = [];
  for (let i = 0; i < loopCount; i++) {
    newArray.push(cloneArray.splice(0, nu));
  }
  return newArray;
};

const a = ["a", "b", "c", "d"];

console.log(chunk(a, 3));

console.log(a);
