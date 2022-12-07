var array = [1, 15, 2, 7, 2, 5, 7, 1, 4];
function sum(x) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] + array[j] === x) {
        result = true;
      }
    }
  }
  return result;
}
console.log(sum(2));
console.log(sum(1231));