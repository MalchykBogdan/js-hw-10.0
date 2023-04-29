//*Задача 1 Створити функцію, яка приймає масив чисел і повертає новий масив, який містить тільки непарні числа.

const arr = [3,5,7,2,9,11,56]

function onlyNotEven (arr){
    let NotevenNumbers = arr.filter(function(number) {
        return number % 2 !== 0;
      });
      return NotevenNumbers
}

let notevenNumbers = onlyNotEven(arr);
console.log(notevenNumbers);