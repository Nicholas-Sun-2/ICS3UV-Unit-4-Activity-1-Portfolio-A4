/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-12-08
 * @fileoverview Sums a number of integers.
 */

const numbersToAdd: number = parseInt(
  prompt("How many integers will be added:") || "1",
);

let sum: number = 0;

for (
  // Initialize the counter.
  let counter: number = 0;
  // Check if the counter is less than the ending value.
  counter < numbersToAdd;
  // Increase the counter.
  counter += 1
) {
  sum += parseInt(
    prompt("Enter integer:") || "0",
  );
}

// Print the output
console.log(`The sum is ${sum}.`);
