// const arr = [7, 8, 2, 20, 11, 31];
const arr = [ 2, 7, 8, 11, 20, 31 ];


console.log('before arr', arr);
const arrLength = arr.length;
for (let i = 0; i < arrLength; i++) {
  let swapped = false;
  for (let j = 0; j < arrLength - i - 1; j++) {
    const temp = arr[j];
    if (arr[j] > arr[j+1]) {
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      swapped = true;
    }
  console.log('after inner loop arr', arr);
  }
  if (!swapped) {
    break;
  }
}

console.log('after arr', arr);