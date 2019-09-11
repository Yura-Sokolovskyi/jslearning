'use strict';

let money,
    time;

money = prompt("Ваш бюджет на месяц?", "0");
time = prompt("Ваш бюджет на месяц?", "YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    appData.expenses[prompt("Введите обязательную статью расходов в этом месяце", "")] = prompt("Во сколько обойдется?", "0");
}

alert(appData.budget / 30);
