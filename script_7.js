// *Задача 7 Необхідно об'єднати два списки даних в один, для цього можна використовувати метод concat ().

const first = [4,5,1];
const second = [5,2,3];

const last = first.concat(second).sort((a,b)=> a - b)
console.log(last);