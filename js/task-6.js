let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Enter a number');
  if (Number.isNaN(Number(input)) || input <= 0) {
    continue;
  } else {
    numbers.push(+input);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log('Введите число!!!');
}
