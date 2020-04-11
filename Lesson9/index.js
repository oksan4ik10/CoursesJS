let calc=document.getElementById("start"),
buttonPlus1=document.getElementsByTagName("button")[0],
buttonPlus2=document.getElementsByTagName("button")[1],
check=document.getElementById("deposit-check"),

//right
budgetDayValue=document.getElementsByClassName("budget_day-value")[0],
budgetMonthValue=document.getElementsByClassName("budget_month-value")[0],
expensesMonth=document.getElementsByClassName("expenses_month-value")[0],
incomeValue=document.getElementsByClassName("additional_income-value")[0],
addExpenses=document.getElementsByClassName("additional_expenses-value")[0],
accumulation=document.getElementsByClassName("income_period-value")[0],
missionMonth=document.getElementsByClassName("target_month-value")[0],
//left

money=document.querySelector(".salary-amount"),
incomeTitle=document.querySelector(".income-title"),
addincomeItems=document.querySelectorAll(".additional_income-item"),
expensesTitle=document.querySelector(".expenses-title"),
expensesAmount=document.querySelector(".expenses-amount"),
addExpensesItem=document.querySelector(".additional_expenses-item"),
targetAmount=document.querySelector(".target-amount"),
period=document.querySelector(".period-select"),
expensesItems=document.querySelectorAll(".expenses-items"),
incomeItems=document.querySelectorAll(".income-items"),
periodAmount=document.querySelector(".period-amount");

//для добавления пустых инпутов (дополнительный доход, обязательные расходы)
let expItem=expensesItems[0].cloneNode(true),
incItem=incomeItems[0].cloneNode(true);

let appData={
    income:{}, //дополнительный заработок
    incomeMonth:0,
    addIncome:[],
    expenses:{},
    addExpenses:[],
    mission:"",
    deposit:false,
    period:12,
    budget:+money,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    percentDeposit:0,
    moneyDeposit:0,
    start: ()=>{
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.getTargetMonth();

        appData.showResult();
        
    //  if(confirm("Есть ли у Вас доп заработок?")){
    //      let itemIncome,cashIncome;
    //      do{
    //          itemIncome=prompt("Какой доп.заработок?","Фриланс");
    //      }while (isNum(itemIncome)||itemIncome==="");
    //      do{
    //          cashIncome=prompt("Сколько зарабатываете?",10000);
    //      }while(!isNum(cashIncome))
    //     appData.income[itemIncome]=+cashIncome;
    //  }
 
    //     appData.addExpenses=prompt("Перечислите возможные расходы за рассчитываемый период через запятую").toLowerCase().split(",");
 
    //     appData.deposit= confirm("Есть ли у вас депозит в банке?");
    //     for (let i = 0; i < 2; i++) {
    //         let s;
    //         do {
    //              s=prompt("Введите обязательную статью расходов");
    //         }while(isNum(s)||s==="")
            
    //         appData.expenses[s]="";
    //         do {
    //              appData.expenses[s]=prompt("Во сколько это обойдется?");
    //          } while (!isNum(appData.expenses[s]))
    //  }
        },
    
     showResult:()=>{
        expensesMonth.value=appData.expensesMonth;
        addExpenses.value=appData.getAddExpenses().join(", ");
        incomeValue.value=appData.addIncome.join(", ");
        budgetDayValue.value=appData.budgetDay;
        budgetMonthValue.value=appData.budgetMonth;
        accumulation.value=+appData.budgetMonth*period.value;  
        period.addEventListener("input",()=>accumulation.value=appData.budgetMonth*period.value)
        missionMonth.value=appData.mission;

     },   
     addExpenses:()=>{
         let newEl=expItem.cloneNode(true);
         if (expensesItems.length<3){
            expensesItems[expensesItems.length-1].parentNode.insertBefore(newEl,buttonPlus2);
         }
         expensesItems=document.querySelectorAll(".expenses-items")                      
     },

     addIncomeVale:()=>{
         let newItem=incItem.cloneNode(true);
         if (incomeItems.length<3){
            incomeItems[0].parentNode.insertBefore(newItem,buttonPlus1);
         }
         incomeItems=document.querySelectorAll(".income-items")   
     },
     getIncomeMonth:()=>{
        incomeItems.forEach((el)=>{
          appData.income[el.querySelector(".income-title").value.trim()]=el.querySelector(".income-amount").value.trim();
       })
       let sum=0;
       for(let key in appData.income){
           if(!isNaN(appData.income[key])){
              sum+=+appData.income[key]; 
           }      
       }
       appData.incomeMonth=sum;    
   },
     getExpensesMonth:()=>{
          expensesItems.forEach((el)=>{
            appData.expenses[el.querySelector(".expenses-title").value.trim()]=el.querySelector(".expenses-amount").value.trim();
         })
         let sum=0;
         for(let key in appData.expenses){
             if(!isNaN(appData.expenses[key])){
                sum+=+appData.expenses[key]; 
             }      
         }
         appData.expensesMonth=sum;
       
     },
     getAddExpenses:()=>{
        let arr=[];
        let newEl=addExpensesItem.value.split(",");
        newEl.forEach((el)=>{
            el=el.trim();
            if (el!=="") arr.push(el);
        })
        return arr;
        
     },
     getAddIncome:()=>{
        addincomeItems.forEach((el)=>{            
            el=el.value.trim();
            if (el!=="") appData.addIncome.push(el);
        })
     },

     getBudget:()=>{
         appData.budgetMonth=(+money.value+appData.incomeMonth)-appData.expensesMonth;
         appData.budgetDay=(appData.budgetMonth/30).toFixed(2);   
       },

     getTargetMonth:()=>{
        let target=parseFloat(targetAmount.value);
        if (!isNaN(target)){
            let res=target/appData.budgetMonth;
            let str=(res>0)?  Math.ceil(res):"Цель не будет достигнута"
            appData.mission=str;
        }        
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
calc.disabled=true;
 money.addEventListener("input",()=>{
     if (money.value.trim()!==""){         
        calc.disabled=false;
     }
     else{ calc.disabled=true}
 })
 calc.addEventListener("click",appData.start);
 buttonPlus1.addEventListener("click",appData.addIncomeVale);
 buttonPlus2.addEventListener("click",appData.addExpenses);
 period.addEventListener("input",()=>periodAmount.textContent=period.value)

 //запрет ввода 
let nameWords=document.querySelectorAll("input[placeholder='Наименование']"),
nameSum=document.querySelectorAll("input[placeholder='Сумма']");

nameWords.forEach((el)=>{
        el.addEventListener("input",(e)=>{
           e.target.value=e.target.value.replace(/([A-Z])|(\d)/gi,"");
        })
})
nameSum.forEach((el)=>{
    el.addEventListener("input",(e)=>{
        e.target.value=e.target.value.replace(/\D/g,"");
    })
})
