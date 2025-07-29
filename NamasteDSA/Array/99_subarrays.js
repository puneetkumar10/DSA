const arr = [1, 2, 3];

for (let start = 0; start < arr.length; start++) {
  for (let end = start; end < arr.length; end++) {
    const subarray = arr.slice(start, end + 1);
    console.log(subarray);
  }
}