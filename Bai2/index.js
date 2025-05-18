function sumOfTopTwo(arr) {
  if (arr.length < 2) throw new Error("Array must have at least 2 numbers");

  const sorted = arr.slice().sort((a, b) => b - a); // Descending
  return sorted[0] + sorted[1];
}

// Test cases
console.log(sumOfTopTwo([1, 4, 2, 3, 5]));     // 9
console.log(sumOfTopTwo([10, -1, 3, 20]));     // 30
console.log(sumOfTopTwo([-5, -10, -3, -1]));   // -4
