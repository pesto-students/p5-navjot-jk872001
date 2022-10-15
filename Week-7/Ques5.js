// JavaScript program to print next greater
// elements in a given array
function printNge(arr, n) {
    console.log("Element" + " --> " + "Next Greater Element");
    var next, i, j;
    // Loop for element
    for (i = 0; i < n; i++) {
      next = -1;
      // Loop for next greater element
      for (j = i + 1; j < n; j++) {
        // if next element is bigger than make it next and return
        if (arr[i] < arr[j]) {
          next = arr[j];
          break;
        }
      }
  
      console.log(arr[i] + " --> " + next);
    }
  }
  
  var arr1 = [1, 3, 2, 4];
  var n = arr1.length;
  printNge(arr1, n);
  
  
  var arr2 = [6,8,0,1,3];
  var n = arr2.length;
  printNge(arr2, n);
  
  // Time Complexity of Next Greater Element is O(n^2)
  // As we are running 2 for loops
  // Space Complexity of Next Greater Element is O(1)
  // As we are not using any extra space
  