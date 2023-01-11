/**
 * Algorithm For Selection Sort
 * A function that takes in an  unsorted and returns a
 * sorted array using Selection sort
 *
 * Params array m: numbers
 * return sorted array m: numbers
 */


function selectionSort(arr: (string | number)[]): (number | string)[] {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    //find the smallest element in the array and return min_index of the element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    //swap the smallest with bigest
    if (smallest !== i) {
      // Swap
      const temp = arr[smallest];
      arr[smallest] = arr[i];
      arr[i] = temp;
      // [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([3, 5, 1, 2])) // [1, 2, 3, 5]
console.log(selectionSort([3, 5, 1, 2, 8, 92, 92, 54, 3])) // [1, 2, 3, 5]