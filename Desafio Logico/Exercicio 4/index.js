var array = [9, 2, 3, 1, 4];
function missingNumbers(array) {
  var max = Math.max(...array);
  var result = [];
  for (var i = 0; i < max; i++) {
    if (array.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}
console.log(missingNumbers(array));