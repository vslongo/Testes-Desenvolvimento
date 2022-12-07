var array = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];
function orderArray(array) {
  var i = 0;
  var j = array.length - 1;
  while (i < j) {
    if (array[i] === 1) {
      i++;
    } else if (array[j] === 1) {
      array[j] = array[i];
      array[i] = 1;
      i++;
      j--;
    } else {
      j--;
    }
  }
  return array;
}
console.log(orderArray(array));