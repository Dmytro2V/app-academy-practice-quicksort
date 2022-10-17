function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 0 ) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];
  let arr1 =[]
  let arr2 =[]
  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
      let el = arr[i];
      if (el < pivot) arr1.push(el);
      else arr2.push(el);
    }
  // Recursively sort the left
  let sort1 = quicksort(arr1);
  // Recursively sort the right
  let sort2 = quicksort(arr2);
  // Return the left, pivot and right in sorted order
  return sort1.concat([pivot]).concat(sort2);
}


module.exports = [quicksort];
