let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Enter a number');
  if (Number.isNaN(Number(input))) {
    alert(`try again`);
    continue;
  }
  numbers.push(Number(input));
} while (input !== null);

for (let number of numbers) {
  total += number;
}

if (numbers.length >= 1) {
  alert(`Общая сумма чисел равна ${total}`);
} else {
  input;
}
console.log(`Общая сумма чисел равна ${total}`);
