//* Задача 3 Створити функцію, яка приймає масив об'єктів з ключами "name" та "age" і повертає новий масив, який містить тільки імена людей старших за 18 років.

const people = [
    { name: 'Michal', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 12 },
    { name: 'David', age: 5 },
    { name: 'Erik', age: 18 },
    { name: 'Frank', age: 28 },
];
for (let i = 0; i < people.length; i++){
    const mans = people[i];
    if(mans.age < 18){
    console.log(`Нажаль ${mans.name} вам не є 18-ти,повернетеся коли будете старші дітки`);
} else if (mans.age >= 18){
    console.log(`Вітаю ${mans.name}, ласкаво просимо шалунчик`);
}
}


