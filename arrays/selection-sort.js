const withoutSwapping = () => {
  // const arr = [7, 8, 2, 20, 11, 31];
  // const arr = [ 2, 7, 8, 11, 20, 31 ];
  const arr = [-7, 8, -2, 20, 11, 31, 19, 1];

  console.log('before arr', arr);
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let temp = arr[i];
    let tempIndex = i;
    for (let j = i; j < arrLength; j++) {
      if (arr[j+1] > temp) {
        temp = arr[j+1];
        tempIndex = j+1;
      }
    }

    
    console.log(`temp index: ${tempIndex}, value: ${temp}`);
    arr.splice(tempIndex, 1);
    arr.unshift(temp);
  }

  console.log('after arr', arr);
}

const withSwapping = () => {
  const arr = [7, 8, 2, 20, 11, 31];
  // const arr = [ 2, 7, 8, 11, 20, 31 ];
  // const arr = [-7, 8, -2, 20, 11, 31, 19, 1];

  console.log('before arr', arr);
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let temp = arr[i];
    let tempIndex = i;
    for (let j = i; j < arrLength; j++) {
      if (arr[j] < temp) {
        temp = arr[j];
        tempIndex = j;
      }
    }
    arr[tempIndex] = arr[i];
    arr[i] = temp;
  }

  console.log('after arr', arr);
}

withoutSwapping();
withSwapping();