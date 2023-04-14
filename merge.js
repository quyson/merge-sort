const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const lowerHalf = array.slice(0, middle);
  const upperHalf = array.slice(middle);
  return merge(mergeSort(lowerHalf), mergeSort(upperHalf));
};

const merge = (lower, upper) => {
  const altArray = [];
  while (lower.length > 0 && upper.length > 0) {
    const arrayWithMin = lower[0] < upper[0] ? lower : upper;
    const mergeElement = arrayWithMin.shift();
    altArray.push(mergeElement);
  }
  return altArray.concat(lower, upper);
};

let answer = mergeSort([1, 9, 5, 8, 2, 55, 3, 4, 44, 45, 43, 22]);
console.log(answer);
