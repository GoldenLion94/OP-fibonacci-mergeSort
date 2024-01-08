// fibonacci sequence

// iterative

const fibs = (n) => {
  const arr = [0, 1];
  if (n <= 0)
    return "Please enter a valid number of elements to be given an answer.";
  if (n === 1) return [0];
  if (n === 2) return arr;
  for (let i = 2; i < n; i++)
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return arr;
};

// console.log(fibs(-2));
// console.log(fibs(1));
// console.log(fibs(2));
// console.log(fibs(3));
// console.log(fibs(8));

// recursive

const fibRecursive = (n, a = [0, 1]) => {
  if (a.length >= n) return a;
  return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
};

console.log(fibRecursive(8));
