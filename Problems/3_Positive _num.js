function filterPositiveNumbers(numbers) {
  const posNum = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      posNum.push(numbers[i]);
    }
  }
  return posNum;
}

const numbersArray = [5, -10, 15, -20, 25,-54,35,-34,65];
const positiveNumbers = filterPositiveNumbers(numbersArray);
console.log(positiveNumbers);