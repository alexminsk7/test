'use strict';

// объявление переменной money
let myMoney = +prompt("Ваш бюджет на месяц ?", '');
console.log(myMoney);

// объявление переменной time
let myTime = prompt("Введите дату в формате YYYY-MM-DD", '');
console.log(myTime);

// создаем объект
let appData = {
  moneyData: myMoney,
  timeData: myTime,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

// создаем переменные с вопросами для пользователя
let question = prompt('Какая статья расходов?');
appData.expenses[question] = +prompt('Во сколько обойдется?');

let question2 = prompt('Какая статья расходов?');
appData.expenses[question2] = +prompt('Во сколько обойдется?');
console.log(appData);

alert(myMoney / 30);