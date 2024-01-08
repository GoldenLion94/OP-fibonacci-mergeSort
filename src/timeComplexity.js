// Efficiency basics
// print out all odd numbers between 1 - 10

function oddNumbersLessThanTen() {
  let currentNumber = 1;
  while (currentNumber < 10) {
    if (currentNumber % 2 != 0) {
      console.log(currentNumber);
    }

    currentNumber += 1;
  }
}
console.log(oddNumbersLessThanTen(10));
