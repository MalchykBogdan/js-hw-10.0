//* Задача 5 Необхідно відобразити список товарів, які відповідають певному критерію цін. Для цього можна використовувати метод filter (), потім дати на них знижку 10%.

const products = [
    { name: "Книга", price: 30 },
    { name: "Ручка", price: 10 },
    { name: "Сумка", price: 20 },
    { name: "Олівець", price: 5 },
    { name: "Телефон", price: 50 }
];

const filterPrice = products.filter((product)=> product.price >= 30);

const discountPrice = filterPrice.map((product)=>{
    return{
        name: product.name,
        price: product.price * 0.9,
    }
})

console.log(discountPrice);