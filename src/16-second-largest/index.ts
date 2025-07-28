/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

const secondLargest = (array: number[]) => {
  return array.sort((n1,n2) => n2-n1).filter(function(item, pos, ary)    {
        return !pos || item != ary[pos - 1];
   })[1];
}


export { secondLargest };
