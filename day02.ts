//1. Write a code to check whether the number is odd or even
let input1: number = 3;
if (input1 % 2 == 1) {
  console.log(`${input1} is an odd number`);
} else {
  console.log(`${input1} is an even number`);
}

//2. Write a code to check whether the number is prime number or not
let input2: number = 7;
let isPrime: boolean = true;
for (let i = 2; i < input2; i++) {
  if (input2 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime);

//3. Write a code to find the sum of the numbers 1 to N
let input3: number = 5;
let result3: number = 0;
for (let i: number = 0; i < input3; i++) {
  result3 += i + 1;
}
console.log(result3);

//4. Write a code to find factorial of a number
let input4: number = 4;
let factorial: number = 1;
for (let i: number = 1; i <= input4; i++) {
  factorial *= i;
}
console.log(factorial);

//5. Write a code to print the first N fibonacci numbers
let n1: number = 0;
let n2: number = 1;
let next: number;
let input: number = 15;

for (let i: number = 0; i < input; i++) {
  next = n1 + n2;
  n1 = n2;
  n2 = next;
}
console.log(n1);
