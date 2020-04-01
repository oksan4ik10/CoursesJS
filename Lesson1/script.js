'use strict';
function isNum(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}


let money, 
income="freelance", 
addExpenses="Courses, internet, car", 
deposit=true,
 mission=7000000, 
 period=12,
 budgetDay;

let start=()=>{
    do{
        money=prompt("Ваш месячный доход?");
    }while(!isNum(money))
}

start();



 //2
 let showTypeOf=(data)=>{
    console.log(data, typeof(data));
 }
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


//4

addExpenses=prompt("Перечислите возможные расходы за рассчитываемый период через запятую").toLowerCase().split(","); 
console.log(addExpenses);

deposit=confirm("Есть ли у вас депозит в банке?");

let expenses=[];

let getExpensesMonth=()=>{
    let sum=0;
    for (let i = 0; i < 2; i++) {
        expenses[i]=prompt("Введите обязательную статью расходов?");
        sum+=+prompt("Во сколько это обойдется?");
    }
    return sum;
}

let expensesAmount=getExpensesMonth();

let getAccumulatedMonth=(income,costs)=>income-costs;

let accumulatedMonth=getAccumulatedMonth(money,expensesAmount);

console.log("Расходы за месяц: ", expensesAmount);
console.log("Бюджет на месяц: ", accumulatedMonth);

let getTargetMonth=(target,budget)=>{
    let res=target/budget;
    let str=(res>0)?  "Цель будет достигнута за: "+Math.ceil(res):"Цель не будет достигнута"
    return str;
   
};
console.log(getTargetMonth(mission,accumulatedMonth));

budgetDay=accumulatedMonth/12;
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




