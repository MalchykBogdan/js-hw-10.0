//* Задача 4 Необхідно відобразити список товарів, відсортований за ціною в порядку зростання або спадання.Для цього можна використовувати метод sort() або reverse().

const products = [
    { name: 'Молоко', price: 25 },
    { name: 'Хліб', price: 15 },
    { name: 'Яблуко', price: 10 },
    { name: 'Сир', price: 50 },
    { name: "М'ясо", price: 120 },
    { name: 'Печиво', price: 20 },
  ];

const sort =  products.sort((a,b) => b.price - a.price);
console.log(sort);

const reverse = products.reverse((a,b) => a.price - b.price);
console.log(reverse);