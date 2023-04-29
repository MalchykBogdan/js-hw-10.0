//* Задача 6 Необхідно відображати список завдань, які можна відмітити як виконані або невиконані. Для цього можна використовувати метод map ().

const tasks = [
    { name: "Task 1", completed: true },
    { name: "Task 2", completed: false },
    { name: "Task 3", completed: false },
    { name: "Task 4", completed: true },
  ];

const complated = tasks.map(task => {
     if (task.completed){
    return{...task, completed: true}
} else {
    return{...task, completed: false}
}
});

console.log(complated);
 