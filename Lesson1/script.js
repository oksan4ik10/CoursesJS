'use strict';

let money, 
income="freelance", 
addExpenses, 
deposit,
 mission=7000000, 
 period=12,
 budgetDay;


//4
money=+prompt("Ваш месячный доход?");
addExpenses=prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
deposit=confirm("Есть ли у вас депозит в банке?");

let expenses1=prompt("Введите обязательную статью расходов?");
let amount1=+prompt("Во сколько это обойдется?");
let expenses2=prompt("Введите обязательную статью расходов?");
let amount2=+prompt("Во сколько это обойдется?");

let getExpensesMonth=(param1,param2)=>param1+param2;
let getAccumulatedMonth=(income,costs)=>income-costs;

let accumulatedMonth=getAccumulatedMonth(money,getExpensesMonth(amount1,amount2));

console.log("Расходы за месяц: ", getExpensesMonth(amount1,amount2));
console.log("Возможные расходы: ",addExpenses.split(","));

console.log("Бюджет на месяц: ", accumulatedMonth);

let getTargetMonth=(target,budget)=>Math.ceil(target/budget);
console.log("Цель будет достигнута за (месяцы): ",getTargetMonth(mission,accumulatedMonth));

budgetDay=accumulatedMonth/30;
console.log("Бюджет на день: ", Math.floor(budgetDay));

//уровень дохода
let getStatusIncome=(budget)=>{
    if (budget>=1200){
        return("Высокий уровень :)");
    }
    else if (budget>=600){
        return("Средний :|");
    }
    else if (budget>=0){
        return("Низкий :(");
    }
    else{
        return("Что-то пошло не так :'(");
    }
};
console.log(getStatusIncome(budgetDay));

let showTypeOf=(data)=>{
    console.log(data, typeof(data));
 }

// showTypeOf(money);
// showTypeOf(income);
// showTypeOf(deposit);
// console.log(addExpenses.length);




