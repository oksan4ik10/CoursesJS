'use strict';

let money=57000, 
income="freelance", 
addExpenses="Courses, internet, car", 
deposit=true,
 mission=7000000, 
 period=12,
 budgetDay=money/30;


 //2
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);

console.log(budgetDay);

//3
money=+prompt("Ваш месячный доход?");
addExpenses=prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit=confirm("Есть ли у вас депозит в банке?");
console.log(addExpenses.toLowerCase().split(","));

let expenses1=prompt("Введите обязательную статью расходов?");
let expenses2=prompt("Введите обязательную статью расходов?");
let amount1=+prompt("Во сколько это обойдется?");
let amount2=+prompt("Во сколько это обойдется?");

let budgetMonth=money-(amount1+amount2);
console.log("Бюджет на месяц: ", budgetMonth);
console.log("Цель будет достигнута за: ",Math.ceil(mission/budgetMonth));

budgetDay=budgetMonth/12;
console.log("Бюджет на день: ", Math.floor(budgetDay));

if (budgetDay>=1200){
    console.log("Высокий уровень :)");
}
else if (budgetDay>=600){
    console.log("Средний :|");
}
else if (budgetDay>=0){
    console.log("Низкий :(");
}
else{
    console.log("Что-то пошло не так :'(");
}



