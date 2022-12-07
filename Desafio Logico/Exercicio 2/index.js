
let array = ["Manzana", "Banana", "Pera", "Naranja", "Melon", "Sandia", "Cereza", "Fresa", "Uva", "Papaya", "Mango", "Coco", "Pina", "Ciruela", "Melocoton", "Albaricoque", "Ciruela", "Melocoton", "Albaricoque", "Ciruela", "Melocoton", "Albaricoque"];
function FindFruit(Fruta) {
    let result = ""
  for (var i = 0; i < array.length; i++) {

      if (array[i] !== Fruta ) {
        result += array[i] + " -> "
      }else{
        result += Fruta
        break
      }

    }
  return result;
}
console.log(FindFruit("Melocoton"));
