const bubbleSortAscending = () => {
  // let arr = [5, 2, 32, 22, 11, 16, 7];
  let arr = [ 2, 5, 11, 22, 32 ];
  
  console.log('bubbleSortAscending before arr', arr);

  // outer loop, iterates the array except for the last value
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    // inner loop, iterates to the unsorted part of the array only by descreasing it by i for every loop
    for (let j = 0; j < arr.length - i - 1; j++) {
      // condition to sort ascending
      if (arr[j+1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swapped = true;
      }
    }

    // break out of the loop if no swapped happened meaning array is already sorted
    if (!swapped) {
      break;
    }
  }

  console.log('after arr', arr);
}

const bubbleSortDescending = () => {
  let arr = [5, 2, 32, 22, 11];
  
  console.log('bubbleSortDescending before arr', arr);

  // outer loop, iterates the array except for the last value
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    // inner loop, iterates to the unsorted part of the array only by descreasing it by i for every loop
    for (let j = 0; j < arr.length - i - 1; j ++) {
      // condition to sort descending
      if (arr[j+1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swapped = true;
      }
    }

    // break out of the loop if no swapped happened meaning array is already sorted
    if (!swapped) {
      break;
    }
  }

  console.log('after arr', arr);
}

bubbleSortAscending();
bubbleSortDescending();