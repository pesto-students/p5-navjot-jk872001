function pairWithDifference(array, difference) {
    console.log("Difference: " + difference);
    let arrSet = new Set(array);
    // console.log(arrSet.has(2 + difference));
    for (let i = 0; i < array.length; i++) {
      if (arrSet.has(array[i] + difference)) return true;
    }
    return false;
  }
  
  const A = [5, 10, 3, 2, 50, 80];
  const B = 78;
  console.log("Pair with difference : ", pairWithDifference(A, B));
  
  // ? Time complexity is O(n)
  // ? Space complexity is O(n)
  
  