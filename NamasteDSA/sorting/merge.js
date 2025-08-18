// to revise
let arr = [8, 3, 5, 1];

let response = mergeSort(arr)
console.log(response);

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) sorted.push(left[i++]);
    else sorted.push(right[j++]);
  }

  return [...sorted, ...left.slice(i), ...right.slice(j)];
}