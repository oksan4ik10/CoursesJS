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

const AppData=function(){
    this.income={}; //дополнительный заработок
    this.incomeMonth=0;
    this.addIncome=[];
    this.expenses={};
    this.addExpenses=[];
    this.mission="";
    this.deposit=false;
    this.period=12;
    this.budget=+money;
    this.budgetDa=0;
    this.budgetMonth=0;
    this.expensesMonth=0;
    this.percentDeposit=0;
    this.moneyDeposit=0;
}

AppData.prototype.start=function(){
    this.getExpensesMonth;
    this.getIncomeMonth;
    this.getAddExpenses;
    this.getAddIncome;
    this.getBudget;
    this.getTargetMonth;
    this.showResult;
};

AppData.prototype.showResult=function(){
    expensesMonth.value=this.expensesMonth;
    addExpenses.value=this.getAddExpenses().join(", ");
    incomeValue.value=this.addIncome.join(", ");
    budgetDayValue.value=this.budgetDay;
    budgetMonthValue.value=this.budgetMonth;
    accumulation.value=+this.budgetMonth*period.value;  
    period.addEventListener("input",()=>accumulation.value=this.budgetMonth*period.value)
    missionMonth.value=this.mission;

};

AppData.prototype.addExpenses=function(){
    let newItem=expensesItems[0].cloneNode(true);
         if (expensesItems.length<3){
             expensesItems[0].parentNode.insertBefore(newItem,buttonPlus2);
         }
         expensesItems=document.querySelectorAll(".expenses-items")  

};

AppData.prototype.addIncomeVale=function(){
    let newItem=incomeItems[0].cloneNode(true);
         if (incomeItems.length<3){
            incomeItems[0].parentNode.insertBefore(newItem,buttonPlus1);
         }
         incomeItems=document.querySelectorAll(".income-items")   


};

AppData.prototype.getIncomeMonth=function(){
    incomeItems.forEach((el)=>{
        this.income[el.querySelector(".income-title").value.trim()]=el.querySelector(".income-amount").value.trim();
     })
     let sum=0;
     for(let key in this.income){
         if(!isNaN(this.income[key])){
            sum+=+this.income[key]; 
         }      
     }
     this.incomeMonth=sum;    
};

AppData.prototype.getExpensesMonth=function(){
    expensesItems.forEach((el)=>{
        this.expenses[el.querySelector(".expenses-title").value.trim()]=el.querySelector(".expenses-amount").value.trim();
     })
     let sum=0;
     for(let key in this.expenses){
         if(!isNaN(this.expenses[key])){
            sum+=+this.expenses[key]; 
         }      
     }
     this.expensesMonth=sum;
};



AppData.prototype.getAddExpenses=function(){
    let arr=[];
    let newEl=addExpensesItem.value.split(",");
    newEl.forEach((el)=>{
        el=el.trim();
        if (el!=="") arr.push(el);
    })
    return arr;
    

}

AppData.prototype.getAddIncome=function(){
    addincomeItems.forEach((el)=>{            
        el=el.value.trim();
        if (el!=="") this.addIncome.push(el);
    })
}

AppData.prototype.getBudget=function(){
    this.budgetMonth=(+money.value+this.incomeMonth)-this.expensesMonth;
    this.budgetDay=(this.budgetMonth/30).toFixed(2);  
}

AppData.prototype.getTargetMonth=function(){
    let target=parseFloat(targetAmount.value);
        if (!isNaN(target)){
            let res=target/this.budgetMonth;
            let str=(res>0)?  Math.ceil(res):"Цель не будет достигнута"
            this.mission=str;
        }       
}

// getInfoDeposit:()=>{
//     if (appData.deposit){
//         do{
//             this.percentDeposit=prompt("Какой годовой процент депозита?", 10);
//             appData.moneyDeposit=prompt('Какая сумма заложена?')
//         } while (!isNum(appData.percentDeposit)||!isNum(appData.moneyDeposit))
        

//     }
// },

AppData.prototype.calcSavedMonth=function(){this.budgetMonth*this.period};





const appData=new AppData();
console.log(appData);

 money.addEventListener("change",()=>{
     if (money.value.trim()!==""){         
        calc.addEventListener("click",appData.start);
     }
     else{ calc.removeEventListener("click",appData.start)}
 })
 
 buttonPlus1.addEventListener("click",appData.addIncomeVale);
 buttonPlus2.addEventListener("click",appData.addExpenses);
 period.addEventListener("input",()=>periodAmount.textContent=period.value)
