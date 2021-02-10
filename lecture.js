// find the intersection of two sorted arrays
// 0(n^2                                                               )
function intersection(a, b) {
  const result = [];
  let startB = 0;
  for (let i = 0; i < a.length; i++) {
    const valueA = a[i];
    for (let j = startB; j < b.length; j++) {
      const valueB = b[j];
      if (valueA === valueB) {
        result.push(valueA);
        // b = b.slice(j + 1);
        startB = j + 1;
        break;
      }
    }
  }
  return result;
}

console.log(intersection([1, 2, 3], [1, 3, 4, 7])); // [1, 3]
console.log(intersection([], [1, 3, 4, 7])); // []
console.log(intersection([1, 2, 3], [])); // []
console.log(intersection([], [])); // []
console.log(intersection([1, 5, 7], [2, 3, 6])); // []
console.log(intersection([1, 1, 3], [1, 1, 1, 1])); // [1, 1]
console.log(intersection([1, 1, 3], [1])); // [1]
console.log(intersection([1, 2], [3, 6])); // []
console.log(intersection([-2, -1, 1, 2], [-1, 3, 6])); // [-1]
console.log(intersection([1, 2, 3.5], [1, 3.5, 4, 7])); // [1, 3.5]
console.log(intersection([1, 2, 3], [1, 3, 2])); // [1,2,3]
