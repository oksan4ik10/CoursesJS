'use strict';
function isNum(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
start=()=>{
    do{
        money=prompt("Ваш месячный доход?");
    }while(!isNum(money))
}

start();

let appData={
   income:{},
   addIncome:[],
   expenses:{},
   addExpenses:[],
   deposit:false,
   mission:50000,
   period:12,
   asking: ()=>{
       appData.addExpenses=prompt("Перечислите возможные расходы за рассчитываемый период через запятую").toLowerCase().split(",");
       appData.deposit= confirm("Есть ли у вас депозит в банке?");
   
    }
}

appData.asking();
console.log(appData);

let 
income="freelance", 
addExpenses, 
deposit,
 mission=7000000, 
 period=12,
 budgetDay;



let expenses=[];

let getExpensesMonth=()=>{
    let sum=0,s;
    for (let i = 0; i < 2; i++) {
        expenses[i]=prompt("Введите обязательную статью расходов?");
        do {
            s=prompt("Во сколько это обойдется?");
        } while (!isNum(s))
        sum+=Number(s);
        console.log(sum); 
    }
    return sum;
}

let expensesAmount=getExpensesMonth();

let getAccumulatedMonth=(income,costs)=>income-costs;

let accumulatedMonth=getAccumulatedMonth(money,expensesAmount);

console.log("Расходы за месяц: ", expensesAmount);
console.log("Возможные расходы: ",addExpenses);

console.log("Бюджет на месяц: ", accumulatedMonth);

let getTargetMonth=(target,budget)=>{
    let res=target/budget;
    let str=(res>0)?  "Цель будет достигнута за: "+Math.ceil(res):"Цель не будет достигнута"
    return str;
   
};
console.log(getTargetMonth(mission,accumulatedMonth));

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







