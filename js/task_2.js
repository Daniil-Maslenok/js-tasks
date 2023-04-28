// Задача 2
// Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.


const workers = [
  { name: "Victor", salary: 750 },
  { name: "Evgeniy", salary: 900 },
  { name: "Daniil", salary: 1100 },
  { name: "Roman", salary: 2000 },
  { name: "Oleg", salary: 1500 }];

const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];

  for (let i = 0; i < workersArr.length; i++) {
    const currentWorker = workersArr[i];

    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name);
    }
  }

  return worthyWorkers;
};

console.log(getWorthyWorkers(workers));