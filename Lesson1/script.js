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
   income:{}, //дополнительный заработок
   addIncome:[],
   expenses:{},
   addExpenses:[],
   deposit:false,
   mission:50000,
   period:12,
   budget:+money,
   budgetDay:0,
   budgetMonth:0,
   expensesMonth:0,
   percentDeposit:0,
   moneyDeposit:0,
   asking: ()=>{
    if(confirm("Есть ли у Вас доп заработок?")){
        let itemIncome,cashIncome;
        do{
            itemIncome=prompt("Какой доп.заработок?","Фриланс");
        }while (isNum(itemIncome)||itemIncome==="");
        do{
            cashIncome=prompt("Сколько зарабатываете?",10000);
        }while(!isNum(cashIncome))
       appData.income[itemIncome]=+cashIncome;
    }

       appData.addExpenses=prompt("Перечислите возможные расходы за рассчитываемый период через запятую").toLowerCase().split(",");

       appData.deposit= confirm("Есть ли у вас депозит в банке?");
       for (let i = 0; i < 2; i++) {
           let s;
           do {
                s=prompt("Введите обязательную статью расходов");
           }while(isNum(s)||s==="")
           
           appData.expenses[s]="";
           do {
                appData.expenses[s]=prompt("Во сколько это обойдется?");
            } while (!isNum(appData.expenses[s]))
    }
       },
    getExpensesMonth:()=>{
        let sum=0;
        for(let key in appData.expenses){
            sum+=+appData.expenses[key];            
        }
        appData.expensesMonth=sum;
    },
    getBudget:()=>{
        appData.budgetMonth=appData.budget-appData.expensesMonth;
        appData.budgetDay=appData.budgetMonth/30;
    },
    getTargetMonth:()=>{
        let res=appData.mission/appData.budgetMonth;
        let str=(res>0)?  "Цель будет достигнута за (месяц): "+Math.ceil(res):"Цель не будет достигнута"
        return str;
       
    },
    getStatusIncome:()=>{
        if (appData.budgetDay>=1200){
            return("Высокий уровень :)");
        }
        else if (appData.budgetDay>=600){
            return("Средний :|");
        }
        else if (appData.budgetDay>=0){
            return("Низкий :(");
        }
        else{
            return("Что-то пошло не так :'(");
        }
    },
    getInfoDeposit:()=>{
        if (appData.deposit){
            do{
                appData.percentDeposit=prompt("Какой годовой процент депозита?", 10);
                appData.moneyDeposit=prompt('Какая сумма заложена?')
            } while (!isNum(appData.percentDeposit)||!isNum(appData.moneyDeposit))
            

        }
    },
    calcSavedMonth:()=>appData.budgetMonth*appData.period


}

appData.asking();
appData.getExpensesMonth();
appData.getBudget();





console.log("Расходы за месяц: ",appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());

for(let key in appData){
    console.log(appData[key]);
}







