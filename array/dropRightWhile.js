const dropRightWhile = (arg1, arg2) => {
  const data = [];
  if (typeof arg2 === "function") {
    for (let i = 0; i < arg1.length; i++) {
      if (arg2(arg1[i])) break;
      data.push(arg1[i][Object.keys(arg1[i])[0]]);
    }
  }

  if (typeof arg2 === "object" && !Array.isArray(arg2)) {
    for (let i = 0; i < arg1.length; i++) {
      if (JSON.stringify(arg1[i]) === JSON.stringify(arg2)) {
        break;
      }
      data.push(arg1[i][Object.keys(arg1[i])[0]]);
    }
  }
  if (typeof arg2 === "object" && Array.isArray(arg2)) {
    for (let i = 0; i < arg1.length; i++) {
      if (arg1[i][arg2[0]] === arg2[1]) break;
      data.push(arg1[i][Object.keys(arg1[i])[0]]);
    }
  }
  if (typeof arg2 === "string") {
    for (let i = 0; i < arg1.length; i++) {
      if (!(arg2 in arg1[i])) break;
      data.push(arg1[i][Object.keys(arg1[i])[0]]);
    }
  }
  return data;
};

const users = [
  { user: "barney", active: true },
  { user: "fred", active: false },
  { user: "pebbles", active: false },
];

// console.log(
//   dropRightWhile(users, function (o) {
//     return !o.active;
//   })
// );
// => objects for ['barney']

// The `_.matches` iteratee shorthand.
// console.log(dropRightWhile(users, { user: "pebbles", active: false }));
// => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
// console.log(dropRightWhile(users, ["active", false]));
// => objects for ['barney']

// The `_.property` iteratee shorthand.
console.log(dropRightWhile(users, "active"));
// => objects for ['barney', 'fred', 'pebbles']
